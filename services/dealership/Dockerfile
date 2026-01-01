FROM node:22-bullseye-slim

ADD package.json .
ADD app.js .
ADD review.js .
ADD dealership.js .
ADD data/dealerships.json .
ADD data/reviews.json .
COPY . .

RUN npm install

EXPOSE 3030

CMD [ "node", "app.js" ]
