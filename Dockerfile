# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the frontend code into the container's working directory
COPY . .

# Install Node.js dependencies
RUN npm install

# Expose port 3000 to allow incoming HTTP requests
EXPOSE 3000

# Start the React development server when the container starts
CMD ["npm", "start"]
