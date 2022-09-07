FROM strapi/base:14

WORKDIR /opt/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --prod

RUN npx browserslist@latest --update-db

COPY . .

ENV NODE_ENV production
ENV DATABASE_CLIENT=postgres
ENV DATABASE_URL=postgres://fataipomhscouk:405c55e6f077342520e5b397af95716436431b832bc91a5decd33a1984491f69@ec2-52-6-77-239.compute-1.amazonaws.com:5432/d3s5t02b7tp75e


RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]
