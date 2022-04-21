FROM node:alpine

WORKDIR /usr/src/web

COPY package.json /usr/src/web
COPY package-lock.json /usr/src/web

RUN npm install

RUN npm install -D @next/swc-linux-arm64-gnu @next/swc-linux-arm64-musl

COPY . /usr/src/web

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
