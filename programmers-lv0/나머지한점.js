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
 * 풀이 과정 : for문을 3개 중복해서 사용해 더한값이 0이면 1을 반환했습니다.
 *
 * 풀이 참고 및 Learning :
 */
