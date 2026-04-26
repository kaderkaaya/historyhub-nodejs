FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app
RUN chown node:node /app

COPY --chown=node:node package*.json ./
RUN npm install --production

COPY --chown=node:node . .

EXPOSE 8080

CMD ["node", "index.js"]
