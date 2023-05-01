function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER
  for (let x of arr) {
    if (x.length > max) {
      max = x.length
      answer = x
    }
  }
  return answer
}

console.log(solution(["11", "111", "1111", "11111"]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
