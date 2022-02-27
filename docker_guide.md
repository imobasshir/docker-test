# Docker

> It is very similar to vm (virtual machine) <br/>
> (basically os (LinuxOS) consists of 3 layers application layer, os kernel layer, and hardware layer),
> but vm makes its own kernal layer and application layer,
> where as docker image make its application layer only on host local machine. <br/>

### Docker Image

> docker image is actually a package or full application which is to be pulled from docker hub.

### Docker Container

> docker container is running environment of (docker image) which is pulled to local device and which runs locally. (File system is virtual in container)

> If we update docker image then it then it will not download all the files it will download from start it will only download nesessary file/layers which is not present.

## Docker Commands

### Docker Pull

```
docker pull [image-name]
```

### Docker Run

```
docker run [container-id]
```

#### On Spesefic Port

```
docker run -p[port-we-want-to-assign / port-of-host]:[container-port] [container-name]
```

#### In Detached mode

```
docker run -d [image-name]
```

#### Give Name

```
docker run -d --name [give-name] [image-name]
```

### List Docker Container

```
docker ps
docker ps -a
```

### Docker Stop

```
docker stop [container-id]
```

### Docker Start

For container restart

```
docker start [container-id]
```

### Docker Logs

```
docker logs [container-id/name]
```

last logs

```
docker logs [container-id/name] | tail
```

### Trouble shoot in shell of that container

```
docker exec -it [container-id/name] /bin/bash or /bin/sh
docker run -it [container-name]
```

### Docker Image

to list all the images

```
docker images
```

### Docker Container Remove

```
docker rm [container-id]
```

### Docker Image Remove

```
docker rmi [image-id]
```

### Docker Network

> When we deploy two docker container into same docker network both container can interact with each other with container name,<br/>
> while application which run outside docker container can connect with docker network with local host or port number.<br/>
> When we deploy application then browser will connect to docker network though host name and port number.<br/>
> By default provide some network.<br/>

to create network

```
docker network create [network-name]
```

to list all the network

```
docker network ls
```

## Example

### How to connect docker mongo container to network and then connect mongo-express container to that network

```
docker run -d --network some-network --name some-mongodb \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=secret \
mongo
```

```
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
--network some-network \
--name some-mongo-express \
-e ME_CONFIG_MONGODB_SERVER=some-mongodb \
mongo-express
```

## Docker Compose

> It is not easy to write docker command all the time so for making out task easier we map it with a file called docker compose.

```
$ docker run -d --network some-network --name mongo \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=pass \
mongo
$ docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=pass \
--network some-network \
--name mongo-express \
-e ME_CONFIG_MONGODB_SERVER=mongo \
mongo-express
```

for this docker compose will look like and save it as stack.yaml

```
version: "3.8"
services:
  mongo:
    image: mongo
    restart: always
    ports:
      - 27017:27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=pass

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=pass
      - ME_CONFIG_MONGODB_SERVER=mongo
```

```
$ docker-compose -f stack.yaml up
$ docker-compose -f stack.yaml down
```

> To deploy docker application we have to make thing which may be accesed from internet ,
> so to make it possible we commit docker application(docker js application in this case) to git
> For doing deployment application should be packeged into its docker container. For this we have to make docker image from our application

### Deployment Process

```
1. make docker application
2. commit it to git this will make ci(continuous integration)
3. CI is done with help of Jenkins or manually
4. Push it to docker repository
```

### Docker File

```
For making of docker image from application which is build by us
We have to copy the container to docker i.e, artifacts(like jar,war,bundle.js)
for doing this we have to make
Blueprint for building images it is called as dockerfile
this all will be on docker file not on the host machine i.e., localhost
```

### EXAMPLE

js application

> what will it do

```
install node

set MONGO_INITDB_ROOT_USERNAME=admin
set MONGO_INITDB_ROOT_PASSWORD=pass

create  /home/app folder

copy current folder files to /home/app

start the app with: "node server.js"
```

> how file looks like

```
FROM node

ENV MONGO_INITDB_ROOT_USERNAME=admin \
    MONGO_INITDB_ROOT_PASSWORD=pass

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node","server.js"]			// CMD is the entry point it is called once only whreas RUN can be called many a times

```

> to bulid Dockerfile

```
$ docker build -t my-app:1.0 .
```

Same work Jenkins does,
then it is pushed to docker repositiory

### Docker Volume

```
It is used because every thing get lost so to stop getting thing lost we use volume
for doing this we add some line in dockerfile
 as
  -v /host:/containerdirestory
 or
  -v /containerdirectory
 or
  -v nameofvol:/containerdirectory
```
