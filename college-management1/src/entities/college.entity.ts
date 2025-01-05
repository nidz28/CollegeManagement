import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from '../entities/city.entity';
import { State } from '../entities/state.entity';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: number;

  @ManyToOne(() => City, (city) => city.id)
  city: City;

  @ManyToOne(() => State, (state) => state.id)
  state: State;
}
