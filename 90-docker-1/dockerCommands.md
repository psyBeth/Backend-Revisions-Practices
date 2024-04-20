 https://docs.docker.com/get-started/docker_cheatsheet.pdf
```sh
# terminal $ or >>

$ docker --version
$ docker version
$ docker info

$ docker --help
$ docker build  --help
$ docker help

$ docker search <imagename>

# create image and random name
$ docker build .
$ docker build . --tag <imagename>
$ docker build . --t <imagename>
$ docker build . --t <imagename>:version

$ docker tag <imagename> <newimagename>

$ docker image ls
$ docker images

$ docker rmi <imagename>
$ docker rmi -f <imagename>
$ docker rmi -f helloimage:v2

$ docker image prune
$ docker image prune -f
$ docker image prune -f -a

$ docker run <imagename>
$ docker run --name <containername> <imagename>

$ docker container ls  # only active ones
$ docker ps
$ docker container ls -a  # all 
$ docker ps -a
$ docker rm <containername> 
$ docker rm <containername> -f
$ docker start|stop  <containername>
$ docker container prune
$ docker run -it imagename sh
$ exit
```sh