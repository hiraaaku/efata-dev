# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Build Next.js app
RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built app from builder
COPY --from=builder /app ./

# Set env vars for Next.js port and host
ENV PORT=3010
ENV HOST=0.0.0.0

# Expose port
EXPOSE 3010

# Start the app
CMD ["npm", "start"]
