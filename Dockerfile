FROM node:7

RUN mkdir -p data/db

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD ["npm", "start"]
EXPOSE 8081
