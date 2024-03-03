FROM node:21-alpine3.18

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app


COPY package*.json ./

USER root

RUN chown -R app:app .

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev