FROM node:alpine

WORKDIR /usr/src/web

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm install -D @next/swc-linux-arm64-gnu @next/swc-linux-arm64-musl

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
