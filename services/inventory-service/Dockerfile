# services/inventory-service/Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
COPY services/inventory-service/package.json ./services/inventory-service/
COPY packages/ ./packages/
RUN pnpm install --frozen-lockfile

FROM deps AS builder
COPY services/inventory-service/ ./services/inventory-service/
WORKDIR /app/services/inventory-service
RUN pnpm db:generate
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm

COPY --from=builder /app/services/inventory-service/dist    ./dist
COPY --from=builder /app/services/inventory-service/package.json .
COPY --from=builder /app/services/inventory-service/prisma  ./prisma

RUN pnpm install --prod

EXPOSE 3003
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget -qO- http://localhost:3003/api/v1/health || exit 1

CMD ["node", "dist/main"]