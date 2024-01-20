FROM nginx:1.21.6
COPY nginx.conf  /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html/

# repalge nginx conf 'API_ORIGIN' and run
ENTRYPOINT sed  -i "s/API_ORIGIN/$API_ORIGIN/g" /etc/nginx/conf.d/default.conf && sed  -i "s/GATEWAY_ORIGIN/$GATEWAY_ORIGIN/g" /etc/nginx/conf.d/default.conf&& nginx -g "daemon off;"
