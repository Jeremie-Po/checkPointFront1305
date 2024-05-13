FROM node:20.9.0-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY src ./src
COPY public ./public
COPY tsconfig.json ./tsconfig.json
COPY tailwind.config.ts tailwind.config.ts
COPY next-env.d.ts ./next-env.d.ts
COPY components.json components.json
COPY *.config.js ./

ARG NEXT_PUBLIC_GRAPHQL_API_URL
ENV NEXT_PUBLIC_GRAPHQL_API_URL ${NEXT_PUBLIC_GRAPHQL_API_URL}

CMD npm run dev