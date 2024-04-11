FROM ubuntu


RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN apt-get upgrade -y
RUN apt install -y nodejs 
RUN apt install npm -y

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

RUN npm install

ENTRYPOINT [ "node","main.js" ]