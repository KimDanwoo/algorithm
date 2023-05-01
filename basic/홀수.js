// 1
function solution(arr) {
  let answer = 0,
    min = Number.MAX_SAFE_INTEGER
  for (let x of arr) {
    if (x % 2 === 1) {
      answer += x
      if (x < min) min = x
    }
  }
  return answer, min
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]))
/**
 * 풀이 시간 : 1:00
 *
 * 풀이 과정 : for of사용
 *
 * 풀이 참고 및 Learning :
 */
