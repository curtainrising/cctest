FROM node:8.10
ADD . /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn

EXPOSE 8080

CMD yarn dev-server
