#!/bin/bash

cd /usr/share/nginx/html/cos_web_html/cos-web
ROOT=$(pwd)
 
SRC_PATH=$ROOT
 
function download_package()
{
	cd $SRC_PATH
echo "正在服务器拉取代码........"
pwd
git pull
}

function restart_nginx()
{
	nginx -s reload
}



function usage()
{
  echo "please input [all | git | restart]"
  echo "-------------------------------------------------"
  echo "-------------------------------------------------"
}

case $1 in
"all")
  download_package
  restart_nginx
;;
"git")
  download_package
;;
"restart")
  restart_nginx
;;
"help")
	usage
;;
*)
	usage	
;;
esac
