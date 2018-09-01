FROM nginx:latest

RUN apt-get update && apt-get install -y python3 python3-eventlet python3-pip

WORKDIR /usr/share/nginx/html
COPY client/build/static static
COPY client/build/index.html index.html

WORKDIR /usr/share/nginx/html/app
COPY production_requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY app.py main.py
# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

# Remove default configuration from Nginx
RUN rm /etc/nginx/conf.d/default.conf

ENV NGINX_PORT $PORT


COPY nginx.conf /etc/nginx/conf.d/
COPY proxy_params /etc/nginx/proxy_params

ENV FLASK_APP /usr/share/nginx/html/app/main.py
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8

COPY start.sh start.sh
CMD ["/bin/bash", "start.sh"]


