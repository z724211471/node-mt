FROM node:10
RUN mkdir -p /node-mt

COPY .  /node-mt
WORKDIR /node-mt

RUN npm run build
EXPOSE 3006

CMD pm2 start ./dist/index  --no-daemon