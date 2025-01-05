import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { CollegesService } from './colleges.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get('college_data/:collegeId')
  async getCollegeData(@Param('collegeId') collegeId: number) {
    return this.collegesService.getCollegePlacements(collegeId);
  }

  @Get('college_courses/:collegeId')
  async getCollegeCourses(@Param('collegeId') collegeId: number) {
    return this.collegesService.getCollegeCourses(collegeId);
  }

  @Get()
  async getColleges(
    @Query('cityId') cityId?: number,
    @Query('stateId') stateId?: number,
  ) {
    return this.collegesService.getColleges(cityId, stateId);
  }
}
