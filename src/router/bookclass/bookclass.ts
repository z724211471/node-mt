import express from "express";
import { getConnection, getRepository } from "typeorm";
import { Bookclass } from "../../mysql/bookclass/bookclass";
import { getPriority } from "os";
const classrouter = express.Router();
let setbook = {
  addclass: (adddata: { [key: string]: string }) => {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Bookclass)
      .values([{ classname: adddata["classname"] }])
      .execute();
  },
  selectclass: (adddata: { [key: string]: string }) => {
    return getRepository(Bookclass).find({
      where: { classname: adddata["classname"] }
    });
  },
  selectall: () => {
    return getRepository(Bookclass).find();
  },
  delclass: (deldata: number) => {
    return getRepository(Bookclass).delete({ id: deldata });
  },
  update: (adddata: { [key: string]: any }) => {
    return getRepository(Bookclass).update(adddata["id"], {
      classname: adddata["classname"]
    });
  }
};

classrouter.post("/addclass", async (req, res) => {
  const zs: { [key: string]: string } = req.body;
  if (!zs["classname"]) {
    res.send({ code: 400, msg: "请输入分类" });
    return;
  }
  setbook
    .selectclass(zs)
    .then(rec => {
      if (rec.length) {
        res.send({ code: 400, msg: "该分类已经存在" });
      } else {
        setbook
          .addclass(zs)
          .then(rec => {
            res.send({ code: 200, msg: "添加成功" });
          })
          .catch(err => {
            res.send({ code: 400, msg: "添加失败" });
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
});
classrouter.post("/getclass", async (req, res) => {
  setbook
    .selectall()
    .then(rec => {
      res.send({ code: 200, msg: "获取成功", data: rec });
    })
    .catch(err => {
      res.send({ code: 400, msg: "获取失败" });
    });
});
classrouter.post("/delclass", async (req, res) => {
  let did: number = req.body.id;
  console.log(did);
  setbook
    .delclass(did)
    .then(rec => {
      console.log(rec);
      res.send({ code: 200, msg: "删除成功", data: rec });
    })
    .catch(err => {
      console.log(err);
      res.send({ code: 400, msg: "删除失败" });
    });
});
classrouter.post("/updateclass", async (req, res) => {
  const zs: { [key: string]: any } = req.body;
  setbook
    .update(zs)
    .then(rec => {
      console.log(rec);
      res.send({ code: 200, msg: "更新成功", data: rec });
    })
    .catch(err => {
      res.send({ code: 400, msg: "更新失败" });
    });
});
export { classrouter };
