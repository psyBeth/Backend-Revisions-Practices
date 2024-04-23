## Server Systems

* Physical Servers (BareMetal Servers):
    * Computers -> High hardware, custom processors, custom operating systems.
    * Installation: difficult
    * Data Transfer: difficult
    * Cost: high
    * Dedicated Servers

* Virtual Servers (VMs: Virtual Machines):
    * Multiple virtual machines within one physical machine.
    * Installation: medium (iso image)
    * Data Transfer: medium
    * Cost: medium
    * Difficulty transitioning from one machine to another.
    * Hypervisor software -> vmware.com
    * VPS (Virtual Private Server), VDS (Virtual Dedicated Server)

* Containers:
    * Multiple containers within one physical/virtual machine.
    * Installation: easy (docker image)
    * Data Transfer: easy
    * Cost: low
    * Ability to manage all containers from the same environment.
    * Microservice architecture.
    * Container software -> docker.com

# Docker

## Installations:

* Docker Desktop -> [Official Docker Website](https://www.docker.com/productsdocker-desktop/)
    * Setup files available for Windows and MacOS.
    * Installation on Linux systems can be done via CLI. -> [Linux Installation Docs](https://docs.docker.com/desktop/install/linux-install/)

* Docker Hub -> https://hub.docker.com

* VSCode Docker Extension -> https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

## .dockerignore

```dockerignore

*.pyc
*.pyo
*.mo
*.db
*.css.map
*.egg-info
*.sql.gz
.cache
.project
.idea
.pydevproject
.idea/workspace.xml
.DS_Store
.git/
.sass-cache
.vagrant/
__pycache__
dist
docs
env/
logs
src/{{ project_name }}/settings/local.py
src/node_modules
web/media
web/static/CACHE
stats
Dockerfile
Footer
node_modules/
npm-debug.log

```
