import { Users } from "./../users/user";
import { Commoditys } from "./../ commodity/commodity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm";

@Entity()
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(type => Users)
  @JoinColumn()
  users: Users;
  @OneToOne(type => Commoditys)
  @JoinColumn()
  commodity: Commoditys;
  @Column("datetime")
  addtime: string;
}
