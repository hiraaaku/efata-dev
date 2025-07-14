# Tahap Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Tahap Production
FROM node:18-alpine AS runner

WORKDIR /app

# Salin node_modules dan output build dari tahap builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Ekspose port 3010
EXPOSE 3010

# Jalankan Next.js
CMD ["npm", "start"]
