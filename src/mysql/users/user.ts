import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({nullable:true})
  sex: string;
  @Column({nullable:true})
  avatar: string;
  @Column({nullable:true})
  token: string;
  @Column({type:"datetime",nullable:true})
  tokentime: string;
  @Column({type:"datetime",nullable:true})
  createtime: string;
}
