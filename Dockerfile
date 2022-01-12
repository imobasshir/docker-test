FROM node

ENV MONGO_INITDB_ROOT_USERNAME=admin \
    MONGO_INITDB_ROOT_PASSWORD=pass 

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node","/home/app/server.js"]