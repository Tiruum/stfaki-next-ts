FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV PORT 3000
ENV NEXT_PUBLIC_API_BASE_URL=backend:5000

EXPOSE $PORT

CMD [ "npm", "run", "start" ]