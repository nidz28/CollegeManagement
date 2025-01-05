import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesController } from '../colleges/colleges.controller';
import { CollegesService } from '../colleges/colleges.service';
import { College } from '../entities/college.entity';
import { CollegePlacement } from '../entities/college-placement.entity';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse])],
  controllers: [CollegesController],
  providers: [CollegesService],
})
export class CollegesModule {}
