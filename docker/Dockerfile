FROM ubuntu


RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN apt-get upgrade -y
RUN apt install -y nodejs 
RUN apt install npm -y

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY main.js main.js

ENTRYPOINT [ "node","main.js" ]