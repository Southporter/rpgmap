#!/bin/bash

echo "daemon off;
error_log stderr info;
worker_processes auto;
pid /app/.heroku/nginx/run/nginx.pid;

events {
  worker_connections 768;
}

http {

	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	types {
		text/html html htm shtml;
		text/css css;
		application/javascript                js;
		text/plain                            txt;

		image/gif                             gif;
		image/jpeg                            jpeg jpg;
		image/png                             png;
		image/x-icon                          ico;
		image/x-jng                           jng;
		image/svg+xml                         svg svgz;
		image/webp                            webp;

		application/zip                       zip;

		audio/mpeg                            mp3;
	}

	server {
		listen ${PORT};
		server_name _;

		root /app/user/html;

		default_type application/octet-stream;
		gzip on;
		gzip_disable "msei6";
		access_log stdout;

		location / {
			index index.html;
			try_files \$uri \$uri/ =404;
		}

		location /socket.io {
			include proxy_params;
			proxy_http_version 1.1;
			proxy_buffering off;
			proxy_set_header Upgrade \$http_upgrade;
			proxy_set_header Connection \"Upgrade\";
			proxy_pass http://127.0.0.1:5000/socket.io;
		}
	}
}
" >> /app/.heroku/nginx/conf/nginx.conf

flask run &
echo "App running"

/app/.heroku/nginx/sbin/nginx
echo "Started nginx"

