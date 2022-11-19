FROM node:16-bullseye-slim

WORKDIR /code/usr/src/app/
RUN apt update
RUN apt install xsel -y
RUN mkdir ./front
COPY ./front/package.json ./front/package.json
# RUN npm run dev
WORKDIR /code/usr/src/app/front
RUN npm install --force
RUN npm install -g serve
COPY ./front/ .
RUN npm run build
CMD ["bash"]