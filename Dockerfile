FROM node:lts-alpine AS build
LABEL app="Gamebots"
LABEL version=0.0.1
LABEL description="Gamebots est une plateforme où les participants peuvent interagir avec une IA pour lui parler de jeux vidéos."
WORKDIR /app
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]