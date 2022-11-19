FROM node:16-bullseye-slim

WORKDIR /code/usr/src/app/
RUN mkdir ./front
COPY ./front/package.json ./front/package.json 
# RUN npm run dev  
WORKDIR /code/usr/src/app/front
RUN npm install --force
COPY ./front/ .
RUN npm start
CMD ["bash"]