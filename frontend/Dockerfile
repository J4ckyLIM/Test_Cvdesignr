# Building stage
FROM node:lts-alpine as build-stage

# Defining 'app' folder as the work directory
WORKDIR /app

# Copy 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install all dependecies for the project
RUN npm install

EXPOSE 80
CMD ["npm", "run", "dev"]