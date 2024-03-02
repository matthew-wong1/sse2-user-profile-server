# Use an official Node.js runtime as the base image
FROM public.ecr.aws/lambda/nodejs:20
 
# Set the working directory within the container
WORKDIR /my-app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Command to run the server
CMD ["lambda.js"]