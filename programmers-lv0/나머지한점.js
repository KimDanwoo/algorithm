function solution(v) {
  let xResult = v[0][0] ^ v[1][0] ^ v[2][0]
  let yResult = v[0][1] ^ v[1][1] ^ v[2][1]

  return [xResult, yResult]
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
)

console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
)
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : 비트연산자를 사용해서 1개인 값을 구해
 * return
 *
 * 풀이 참고 및 Learning :
 */
