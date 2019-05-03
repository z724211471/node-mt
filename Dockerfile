FROM node:10
COPY ./node-mt /
WORKDIR /node-mt

RUN npm run build   
EXPOSE 3006 
CMD ["pm2-runtime", "./dist/index.js"]