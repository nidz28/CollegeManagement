import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from '../entities/college.entity';
import { CollegePlacement } from '../entities/college-placement.entity';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';

@Injectable()
export class CollegesService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
    @InjectRepository(CollegePlacement)
    private readonly placementRepository: Repository<CollegePlacement>,
    @InjectRepository(CollegeWiseCourse)
    private readonly courseRepository: Repository<CollegeWiseCourse>,
  ) {}

  async getCollegePlacements(collegeId: number) {
    // Section 1: avg_section
    const avgSection = await this.placementRepository
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest_placement')
      .addSelect('AVG(placement.average_placement)', 'avg_average_placement')
      .addSelect('AVG(placement.median_placement)', 'avg_median_placement')
      .addSelect('AVG(placement.placement_rate)', 'avg_placement_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.average_placement IS NOT NULL')
      .andWhere('placement.median_placement IS NOT NULL')
      .andWhere('placement.placement_rate IS NOT NULL')
      .groupBy('placement.year')
      .getRawMany();

    // Section 2: placement_section
    const placements = await this.placementRepository.find({
      where: { college: { id: collegeId } },
      order: { year: 'ASC' },
    });

    const placementTrend = placements.reduce((trend, current, index, arr) => {
      if (index > 0) {
        const prevRate = arr[index - 1].placement_rate;
        const currRate = current.placement_rate;
        trend[current.year] = currRate > prevRate ? 'UP' : 'DOWN';
      }
      return trend;
    }, {});

    return { avgSection, placements, placementTrend };
  }

  async getCollegeCourses(collegeId: number) {
    return this.courseRepository.find({
      where: { college: { id: collegeId } },
      order: { course_fee: 'DESC' },
    });
  }

  async getColleges(cityId?: number, stateId?: number) {
    const query = this.collegeRepository.createQueryBuilder('college');

    if (cityId) query.andWhere('college.city_id = :cityId', { cityId });
    if (stateId) query.andWhere('college.state_id = :stateId', { stateId });

    return query.orderBy('college.score', 'DESC').getMany();
  }
}
