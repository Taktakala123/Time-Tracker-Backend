# Use the official Node.js image as the base image
FROM node:16.13.1-alpine3.14
# Set the working directory in the container
WORKDIR /app

# Install the Nest CLI globally
RUN npm install -g @nestjs/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app

# Install application dependencies
RUN npm install

# generated prisma files
COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Nest.js application will run on
EXPOSE 3000

# Command to start the Nest.js application
CMD ["npm","run" ,"start:dev"]