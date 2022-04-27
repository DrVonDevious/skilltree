FROM mhart/alpine-node:14.17.3

WORKDIR /usr/src/api

COPY package.json /usr/src/api
COPY package-lock.json /usr/src/api

RUN npm install

COPY . /usr/src/api

RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "run"]
