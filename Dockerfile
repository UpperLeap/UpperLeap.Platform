# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies using pnpm
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN corepack enable pnpm && pnpm i

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# This will do the trick, use the corresponding env file for each environment.
COPY .env .env.production
COPY .env .env
RUN corepack enable pnpm && pnpm run build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy all files needed to run the application
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["pnpm", "start"]