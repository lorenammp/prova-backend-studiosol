FROM node:alpine

EXPOSE 8080

WORKDIR /app

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "start"]