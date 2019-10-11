FROM node:10-alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]