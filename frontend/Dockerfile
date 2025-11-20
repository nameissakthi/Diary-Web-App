FROM node:22
LABEL authors="sakthivel"

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENTRYPOINT ["npm", "run", "dev"]