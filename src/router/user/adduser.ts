import { userdata } from "./setuser";
import express from "express";

const user = express.Router();

user.post("/adduser", async (req, res) => {
  const zs: { [key: string]: string } = req.body;
  if (!zs["username"]) {
     res.send({ code: 400, msg: "请输入用户名" });
     return
  }
  if (!zs["password"]) {
    res.send({ code: 400, msg: "请输入密码" });
    return
  }
  userdata
    .adduser(zs)
    .then(rec => {
      res.send({ code: 200, msg: "注册成功" });
    })
    .catch(err => {
      res.send({ code: 400, msg: "注册失败" });
    });
});

export { user };
