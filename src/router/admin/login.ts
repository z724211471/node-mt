
import express from "express";

const amrouter = express.Router();


amrouter.post("/login", async (req, res) => {
  const zs: { [key: string]: string } = req.body;
  if (!zs["username"]) {
    res.send({ code: 400, msg: "请输入用户名" });
    return;
  }
  if (!zs["password"]) {
    res.send({ code: 400, msg: "请输入密码" });
    return;
  }
});