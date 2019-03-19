import { Bookclass } from './../bookclass/bookclass';

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({type:"longtext"})
  text: string;
  @Column()
  classid: number;
  @Column({type:"datetime",nullable:true})
  createtime: string;
}
