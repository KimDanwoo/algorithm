function solution(r1, r2) {
  let answer = 0

  for (let x = 1; x <= r2; x++) {
    let maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2))
    if (r1 > x) {
      minY = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2))
    } else {
      minY = 0
    }
    answer += maxY - minY + 1
  }
  return answer * 4
}
// 입출력 예시
const r1 = 2
const r2 = 3
console.log(solution(r1, r2)) // 출력: 3

/**
 * 풀이 시간 :
 * 풀이 과정 :
 *
 */
