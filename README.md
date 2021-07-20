# Docker Notes

## Build
```
    docker build -t [image-name] .
```

## RUN SYNC AND READ ONLY

```
    doccker run -v [onLocationDir]:[toLocationDir]:[otheroption] -v [untouch toLocationDir] -p exposePort:hostPort -d --name [image app] [image]

    eg:
    docker run -v %cd%:/app:ro -v /app/node_modules --env PORT=8000 -p 4000:4000 -d --name node-app node-app-image

    eg with env file:
    docker run -v %cd%:/app:ro -v /app/node_modules --env-file ./.env -p 4000:4000 -d --name node-app node-app-image
```

## KILL PORT

```
    docker rm [name of image] -f

    eg: 
    docker rm node-app -f
```

## CHECK RUNNING IMAGE

```
    docker ps
```

## VIEW LIST OF IMAGES

```
  docker images

```

## DOCKER BASH

```
    docker exec -it [image name] bash

    eg:
    docker exec -it node-app bash
```

## PRINT ENV IN DOCKER BASH

```
 printenv
```