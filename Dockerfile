# Use the official Node.js image as the base image
FROM node:16.13

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app/

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Nest.js application will run on
EXPOSE 3000

RUN npm install prisma

# generated prisma files
COPY prisma/schema.prisma ./prisma/

# COPY ENV variable
COPY .env .env

RUN npx prisma generate

# Command to start the Nest.js application
CMD ["npm", "start"]