# Use the official Node.js LTS image
FROM node:20-bullseye

# Create app directory
WORKDIR /workspace

# Install common global tools
RUN apt-get update && apt-get install -y git bash curl && rm -rf /var/lib/apt/lists/*

# Default user (safer than root)
USER node
