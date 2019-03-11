import { Bookclass } from './../bookclass/bookclass';

import { Entity, Column, PrimaryGeneratedColumn,JoinColumn,ManyToOne } from "typeorm";
@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({type:"longtext"})
  text: string;
  @ManyToOne(type => Bookclass,bookclass=>bookclass.id)
  class: Bookclass;
  @Column({type:"datetime",nullable:true})
  createtime: string;
}
