
FROM alpine:latest as node
WORKDIR /app

RUN apk add --update nodejs npm

FROM node as build-ui
COPY src ./src
COPY public ./public
COPY package.json .
COPY *.lock .
RUN npm i
RUN ls -la
RUN npm run build

FROM node as runner
ENV BASE_PATH=public
ENV SERVER=https://prod.env.com
COPY --from=build-ui /app/build ${BASE_PATH}
COPY server .
RUN ls -la
RUN npm i
ENTRYPOINT [ "node", "index.js" ]
