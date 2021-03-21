FROM node:latest

MAINTAINER Parvin Ghosh 

RUN echo "Building my first application"

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm","start"]
