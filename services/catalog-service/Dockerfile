# services/catalog-service/Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# ── Dependencies ───────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
COPY services/catalog-service/package.json ./services/catalog-service/
COPY packages/ ./packages/
RUN pnpm install --frozen-lockfile

# ── Builder ────────────────────────────────────────────────────────────────────
FROM deps AS builder
COPY services/catalog-service/ ./services/catalog-service/
WORKDIR /app/services/catalog-service
RUN pnpm db:generate
RUN pnpm build

# ── Runner ─────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm

COPY --from=builder /app/services/catalog-service/dist ./dist
COPY --from=builder /app/services/catalog-service/generated ./generated
COPY --from=builder /app/services/catalog-service/package.json .
COPY --from=builder /app/services/catalog-service/prisma ./prisma

RUN pnpm install --prod

EXPOSE 3002
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget -qO- http://localhost:3002/api/v1/health || exit 1

CMD ["node", "dist/main"]