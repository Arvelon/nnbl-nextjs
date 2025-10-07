# 1️⃣ Build stage — install deps and build Next.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files first (for better layer caching)
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm ci --no-audit --no-fund

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Export static files (for Pages Router)
RUN npm run export

# 2️⃣ Serve stage — use nginx to serve the static export
FROM nginx:alpine

# Copy exported static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
