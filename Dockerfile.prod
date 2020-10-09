# build environment
FROM node:13.12.0-alpine as build
WORKDIR ./
ENV PATH ./node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build ./build /usr/share/nginx/html/dashboard
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --update bash && rm -rf /var/cache/apk/*

WORKDIR /usr/share/nginx/html/dashboard
COPY env.sh ./
COPY .env ./
RUN chmod +x env.sh

EXPOSE 80
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/dashboard/env.sh && nginx -g \"daemon off;\""]