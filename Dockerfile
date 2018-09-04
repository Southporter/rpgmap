FROM heroku/cedar:latest

RUN apt-get update && apt-get install -y python3 python3-pip curl

RUN mkdir -p /app/user /app/user/html /app/user/html/app /app/.heroku/nginx/conf /app/.heroku/nginx/logs /app/.heroku/nginx/sbin /app/.heroku/nginx/run
RUN curl --silent --location https://github.com/ngs/heroku-docker-nginx/raw/master/nginx.tar.gz | tar xz -C /app/.heroku/nginx/sbin

WORKDIR /app/user/html
COPY client/build/static static
COPY client/build/index.html index.html

WORKDIR /app/user/html/app
COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY app.py main.py
# forward request and error logs to docker log collector
COPY proxy_params /app/.heroku/nginx/conf/proxy_params

ENV FLASK_APP /app/user/html/app/main.py
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8

COPY start.sh start.sh
CMD ["/bin/bash", "start.sh"]


