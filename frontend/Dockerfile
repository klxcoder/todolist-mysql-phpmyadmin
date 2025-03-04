FROM node
RUN useradd -ms /bin/sh -u 1001 app
USER app

WORKDIR /app
COPY ./vite/package.json ./vite/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=app:app ./vite ./

CMD ["yarn", "dev"]