# 1️⃣ Build stage — build static export
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm ci --no-audit --no-fund

# Copy the rest of the app
COPY . .

# Build static output (uses "output: export" from next.config.js)
RUN npm run build

# 2️⃣ Serve stage — nginx serving the static export
FROM nginx:alpine

# Copy static output from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Remove default nginx page
RUN rm -f /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
