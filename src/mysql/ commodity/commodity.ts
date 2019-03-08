import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Commoditys {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  shopname: string;
  @Column("int")
  stock: number;
  @Column()
  imgs: string;
  @Column("datetime")
  createtime: string;
}
