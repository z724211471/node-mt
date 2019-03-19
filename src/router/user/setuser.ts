import { getConnection, getRepository } from "typeorm";
import { Users } from "../../mysql/users/user";
import { user } from "./adduser";

export const userdata = {
  adduser: (adddata: { [key: string]: string }) => {
   return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        { username: adddata["username"], password: adddata["password"] }
      ])
      .execute();
  },
  loginuser: (adddata: { [key: string]: string }) => {
    return getRepository(Users).find({where:{username:adddata['username'],password:adddata["password"]}})
  }
};
