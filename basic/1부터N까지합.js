function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i++) {
    answer += i
  }
  return answer
}

console.log(solution(6))
/**
 * 풀이 시간 : 1:00
 *
 * 풀이 과정 : for문을 사용해서
 * n까지 더해준다.
 *
 * 풀이 참고 및 Learning :
 */
