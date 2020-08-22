### VueApp

## Project setup

```
npm install
```

To get the official vue CLI

```
npm install -g @vue/cli
```

### For windows developer

You may need this tool to get the project working correctly (only if you get some issue with npm install)

```
npm install -g windows-build-tools
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Run in development with docker

Docker is required to proceed.

Create a docker image for the app:

```
docker-compose build
```

Run the app in a docker container with this command:

```
docker-compose up
```

Your app is ready to use

### Run in production with docker

Docker is required to proceed.

Create a docker image for the app:

```
docker build -t <name of your new docker image> -f <name of the dockerfile to use>.
```

Run the app inside your docker container:

```
docker run -it -p 8080:8080 --rm --name <name of the app> <name of the image given before>
```

Your app is ready just go to localhost:8080

### Compiles and minifies for production

```
npm run build
```

