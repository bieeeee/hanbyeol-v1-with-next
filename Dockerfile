FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./

RUN \
    if [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
    --mount=type=secret, id=BUCKET_NAME \
    --mount=type=secret, id=BUCKET_REGION \
    --mount=type=secret, id=PROJECT_KEY \
    --mount=type=secret, id=S3_MANAGER_KEY \
    --mount=type=secret, id=S3_MANAGER_SECRET_KEY \
    --mount=type=secret, id=NEXT_PUBLIC_CLOUD_NAME \
    export BUCKET_NAME=$(cat /run/secrets/BUCKET_NAME) && \
    export BUCKER_REGION=$(cat /run/secrets/BUCKER_REGION) && \
    export PROJECT_KEY=$(cat /run/secrets/PROJECT_KEY) && \
    export S3_MANAGER_KEY=$(cat /run/secrets/S3_MANAGER_KEY) && \
    export S3_MANAGER_SECRET_KEY=$(cat /run/secrets/S3_MANAGER_SECRET_KEY) && \
    export NEXT_PUBLIC_CLOUD_NAME=$(cat /run/secrets/NEXT_PUBLIC_CLOUD_NAME) && \
    npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js