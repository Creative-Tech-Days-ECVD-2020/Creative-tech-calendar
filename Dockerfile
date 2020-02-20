FROM node:12.13.1

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY . /app

CMD ["yarn", "start"]
