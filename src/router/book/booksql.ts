import { getConnection, getRepository } from "typeorm";
import { Books } from "../../mysql/book/book";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

let time = dayjs(new Date())
  .locale("zh-cn")
  .format("YYYY-MM-DD HH:mm:ss");

function removeHTMLTag(str: string) {
  str = str.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
  str = str.replace(/[ | ]*\n/g, "\n"); //去除行尾空白
  //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  str = str.replace(/ /gi, ""); //去掉
  return str;
}
function escape2Html(str: string) {
  let arrEntities :{[key:string]:string} = { lt:"<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(t: any
  ): any {
    return arrEntities[t];
  });
}
function html2Escape(sHtml:string) {
    let arrEntities :{[key:string]:string} = { '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'};
    return sHtml.replace(/[<>&"]/g,function(c){return arrEntities[c];});
   }
   
let books = {
  addbook: (data: { [key: string]: any }) => {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Books)
      .values([
        {
          title: data["title"],
          text: html2Escape(data["text"]),
          classid: data["class"],
          createtime: time
        }
      ])
      .execute();
  },
  selbook:()=>{
    return getRepository(Books).find({select:['id','title','createtime']});
  },
  selidbook:(bookid:number)=>{
    return getRepository(Books).find({where:{id:bookid}});
  },
  delbook:(bookid:number)=>{
    return getRepository(Books).delete({id:bookid})
  },
  updatabook:(data: { [key: string]: any }) => {
    return  getRepository(Books).update(data["id"], {
      title:data["title"], text:html2Escape(data["text"]),classid:data["class"]
    });
  }
};

export default books;
