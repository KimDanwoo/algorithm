const fs = require('fs')
const inputData = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number)

const A = inputData[0]
const B = inputData[1]

console.log(A + B)
console.log(A - B)
console.log(A * B)
console.log(parseInt(A / B))
console.log(A % B)

/**
 * 문 제 :
 * 풀이 시간 :
 *
 * 풀이 과정 : 백준 문제 풀려면 fs로 가져와서 풀어야하는구나..
 *
 *
 * 풀이 참고 및 Learning :
 */
