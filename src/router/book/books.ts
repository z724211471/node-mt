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
  if(data['id']){
    books
    .updatabook(data)
    .then(rec => {
      res.send({ code: 200, msg: "更新成功" });
    })
    .catch(err => {
      console.log(err);
      res.send({ code: 400, msg: "更新失败" });
    });
  }else{
    books
    .addbook(data)
    .then(rec => {
      res.send({ code: 200, msg: "添加成功" });
    })
    .catch(err => {
      console.log(err);
      res.send({ code: 400, msg: "添加失败" });
    });
  }
 
});
booksrouter.post("/getbook", async (req, res) => {
  let did: number = req.body.id;
  if(did){
    books
    .selidbook(did)
    .then(rec => {
      res.send({ code: 200, msg: "获取成功", data: rec });
    })
    .catch(err => {
      res.send({ code: 400, msg: "获取失败" });
    });
  }else{
    books
    .selbook()
    .then(rec => {
      res.send({ code: 200, msg: "获取成功", data: rec });
    })
    .catch(err => {
      res.send({ code: 400, msg: "获取失败" });
    });
  }
  
});
booksrouter.post("/delbook", async (req, res) => {
  let did: number = req.body.id;
  books
    .delbook(did)
    .then(rec => {
      res.send({ code: 200, msg: "删除成功", data: rec });
    })
    .catch(err => {
      res.send({ code: 400, msg: "删除失败" });
    });
});

export { booksrouter };
