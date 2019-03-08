import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Bookclass {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  classname: string;
  @Column({type:"datetime",nullable:true})
  createtime: string;
}
