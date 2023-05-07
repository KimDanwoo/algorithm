function isPrime(num) {
  if (num === 1) return false
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function solution(arr) {
  let answer = []
  for (let x of arr) {
    // let res = 0
    // while (x) {
    //   let t = x % 10
    //   res = res * 10 + t
    //   x = parseInt(x / 10)
    // }
    let res = Number(x.toString().split("").reverse().join(""))
    if (isPrime(res)) answer.push(res)
  }
  return answer
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]))
/**
 * 풀이 시간 : 5:00
 *
 * 풀이 과정 : 소수값인지 확인 및 자릿수 뒤집기
 *
 * 풀이 참고 및 Learning :
 */
