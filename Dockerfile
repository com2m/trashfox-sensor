FROM nginx
RUN rm /etc/nginx/conf.d/*
COPY nginx/webui.conf /etc/nginx/conf.d
COPY dist /var/www/trashfox
EXPOSE 80
