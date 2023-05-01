function solution(n) {
  const result = Array(n.length).fill(0)
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[i] <= n[j]) {
        result[i] += 1
      }
    }
  }
  return result
}

console.log(solution([87, 89, 92, 100, 76]))
/**
 * 풀이 시간 : 3:00
 *
 * 풀이 과정 : 미리 배열 생성 후 점수를 계산해서 배열을 생성했습니다.
 *
 * 풀이 참고 및 Learning :
 */
