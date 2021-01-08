FROM node:14.15.4-alpine3.12
EXPOSE 3000
COPY . /app
WORKDIR /app
CMD [ "node","server.js" ]