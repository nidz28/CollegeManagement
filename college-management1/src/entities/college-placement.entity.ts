import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.id)
  college: College;

  @Column()
  year: number;

  @Column({ nullable: true, type: 'numeric', precision: 10, scale: 2 })
  highest_placement: number;

  @Column({ nullable: true, type: 'numeric', precision: 10, scale: 2 })
  average_placement: number;

  @Column({ nullable: true, type: 'numeric', precision: 10, scale: 2 })
  median_placement: number;

  @Column({ nullable: true, type: 'numeric', precision: 5, scale: 2 })
  placement_rate: number;
}
