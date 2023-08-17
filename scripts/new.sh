#!/bin/sh

filename=$1

if [ "$1" = "" ]; then
  echo "알고리즘 문제 이름을 적어주세요 : "
  read filename
fi

touch "$filename.js"
echo "function solution(n) {" >> "$filename".js
echo "  let answer = 0" >> "$filename".js
echo ""  >> "$filename".js
echo "  return answer"  >> "$filename".js
echo "}" >> "$filename".js
echo "" >> "$filename".js
echo "console.log(solution(n))" >> "$filename".js
echo "/**" >>"$filename".js
echo " * 풀이 시간 : " >>"$filename".js
echo " *" >>"$filename".js
echo " * 풀이 과정 :" >>"$filename".js
echo " *" >>"$filename".js
echo " * 풀이 참고 및 Learning :" >>"$filename".js
echo " */" >>"$filename".js
