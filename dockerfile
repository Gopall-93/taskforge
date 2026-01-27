# Use Node LTS
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start:prod"]
