import express from "express";
import multer from "multer";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

let time = dayjs(new Date())
  .locale("zh-cn")
  .format("YYYYMMDDHHmmss");
console.log(__dirname);
const storage = multer.diskStorage({
  destination: "./uploads",
  filename(req, file, cb) {
    cb(null, `${time}-${file.originalname}`);
  }
});

let upload = multer({ storage });

const commRouter = express.Router();
commRouter.post("/addfile", upload.single("avatar"), async (req, res) => {
  const file = req.file; // file passed from client
  const meta = req.body;
  console.log(file);
  console.log(meta);
  return res.send({ code: 200, msg: "添加成功" });
});

export { commRouter };
