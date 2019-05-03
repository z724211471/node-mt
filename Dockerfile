FROM node:10
COPY ./node-mt /
WORKDIR /node-mt

RUN npm install pm2 -g            # 全局安装 pm2
RUN npm install                   # 安装项目依赖
RUN npm run build   
EXPOSE 3006 
CMD ["pm2-runtime", "./dist/index.js"]