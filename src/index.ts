
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { user } from "./router/user/adduser";
import { classrouter } from "./router/bookclass/bookclass";
import {booksrouter} from './router/book/books'
import bodyParser from "body-parser";
import lessMiddleware from "less-middleware";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(user);
app.use(classrouter);
app.use(booksrouter);
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(lessMiddleware(__dirname+'/public',{debug:true,force:true}));

app.use(express.static(__dirname+'/public'))
app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
app.get('/re', function(req, res) {
  res.render('re', { title: 'Express' });
});
createConnection({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "czy",
  password: "123456",
  database: "mall",
  entities: [__dirname + "/mysql/**/*.ts"],
  synchronize: true,
  logging: false
})
  .then(con => {
    //   console.log(con);
    // here you can start to work with your entities
  })
  .catch(error => console.log(error));

app.listen(3006, () => {
  console.log("Example app listening on port 3006!");
});
