import books from "./booksql";
import express from "express";

const booksrouter = express.Router();

booksrouter.post("/addbook", async (req, res) => {
  const data: { [key: string]: any } = req.body;
  if (!data["title"]) {
    res.send({ code: 400, msg: "请输入标题" });
    return;
  }
  if (!data["text"]) {
    res.send({ code: 400, msg: "请输入正文" });
    return;
  }
  if (!data["class"]) {
    res.send({ code: 400, msg: "请选择分类" });
    return;
  }
  books
    .addbook(data)
    .then(rec => {
      res.send({ code: 200, msg: "添加成功" });
    })
    .catch(err => {
        console.log(err);
      res.send({ code: 400, msg: "添加失败" });
    });
});

export {
    booksrouter
}