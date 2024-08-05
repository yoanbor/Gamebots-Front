# syntax=docker/dockerfile:1

FROM node:18-alpine AS build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM ubuntu

LABEL app="Gamebots"
LABEL version="0.0.1"
LABEL description="Gamebots est une plateforme où les participants peuvent interagir avec une IA pour lui parler de jeux vidéos."

RUN apt-get update
RUN apt-get install nginx -y

COPY --from=build /app/dist /var/www/html/

EXPOSE 5173
CMD ["nginx","-g","daemon off;"]