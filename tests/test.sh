v=$(sh login.sh 2>/dev/null|grep 'verifyRequestCode'|grep -oE 'verifyRequestCode":".*?"')
echo ${v:20:32}
curl "127.0.0.1:9090?request_code=${v:20:32}"
