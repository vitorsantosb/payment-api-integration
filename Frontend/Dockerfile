FROM node
E 5173
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOS

CMD [ "npm", "start"]