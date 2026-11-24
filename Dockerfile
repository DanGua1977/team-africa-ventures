# Two stages: build the static site, then run it on a dependency-free Node server.
# Works on Railway (auto-detected), Render, Fly.io, Cloud Run or any Docker host.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
ARG SITE_URL=https://www.teamafricaventures.com
ENV SITE_URL=$SITE_URL
RUN npm run build

FROM node:22-alpine AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY server.mjs package.json ./
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:${PORT:-8080}/healthz || exit 1
CMD ["node", "server.mjs"]
