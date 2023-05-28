FROM node:18.14.2

# Create the bot's directory

RUN mkdir -p /usr/src/payment-api

WORKDIR /usr/src/payment-api


COPY package.json /usr/src/payment-api
RUN npm install

COPY . /usr/src/payment-api

# Start the bot.
CMD ["node", "index.js"]
