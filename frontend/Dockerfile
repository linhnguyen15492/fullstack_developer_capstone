FROM node:24-alpine

ADD package.json .

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]