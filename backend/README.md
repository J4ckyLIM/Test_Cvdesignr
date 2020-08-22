### Backend

## Requierements

Nodejs installed version 12 or higher.

To check your version:

```
node -v
```

Get all the dependencies

```
npm install
```

For dependencies that has problem with npm install,
Run this command:

```
npm rebuild <name of the dependency>
```
## Change variables

In the config folder there're 2 files:

config.js and pgsql.config.js

```
config.js

change the port variable
```
```
pgsql.config.js

change all the variable to connect to your database server
```

## Running the REST API

To run the server, type the following command:

```
node server
```

You're now ready to use the server.