FROM node:18.4
LABEL version="1.0"
LABEL description="This is the base docker image for the react app "
LABEL maintainer = ["marek.urbaniec1@gmail.com"]
RUN mkdir /srv/example
WORKDIR /srv/example
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .