// 데이터 베이스 역할을 하는 곳

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | any;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column('text', { array: true, default: [] })
  genres: string[];
}
