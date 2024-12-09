FROM node:slim as build-stage
WORKDIR /tmp

COPY package.json /tmp
COPY yarn.lock /tmp
RUN yarn

COPY . /tmp
RUN yarn build

FROM nginx:1.25 as config-nginx

# modify the default nginx config to turn off logging
RUN sed -i 's/access_log.*$/access_log off;/' /etc/nginx/nginx.conf
RUN sed -i 's/error_log.*$/error_log off;/' /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf

# override the vhost config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

FROM nginx:1.25

EXPOSE 80

RUN ln -s /usr/share/nginx/html /html

COPY --from=config-nginx /etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=config-nginx /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /tmp/out /html
