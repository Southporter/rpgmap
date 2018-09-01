#!/bin/bash

/etc/init.d/nginx start
echo "Started nginx"

echo "CAT"
cat /usr/share/nginx/html/index.html
echo "\n\nAPP folder"
ls /usr/share/nginx/html/app

flask run
echo "App finished"
