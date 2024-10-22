FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:20

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

CMD ["node", "index.js"]

EXPOSE 3000
