import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { TaskStatus } from './tasks.enum';
import { User } from '@modules/auth/user.entity';
@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public status: TaskStatus;

  @ManyToOne(type => User, user => user.tasks, { eager: false })
  user: User;

  @Column()
  public userId: number;
}
