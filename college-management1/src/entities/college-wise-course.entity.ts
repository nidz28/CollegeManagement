import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.id)
  college: College;

  @Column()
  course_name: string;

  @Column()
  course_duration: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  course_fee: number;
}
