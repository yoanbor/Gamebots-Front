# syntax=docker/dockerfile:1

FROM node:18-alpine AS build
LABEL app="Gamebots"
LABEL version="0.0.1"
LABEL description="Gamebots est une plateforme où les participants peuvent interagir avec une IA pour lui parler de jeux vidéos."
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
