function solution(a, b) {
  let answer = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push("D")
    } else if (
      (a[i] === 1 && b[i] === 2) ||
      (a[i] === 2 && b[i] === 3) ||
      (a[i] === 3 && b[i] === 1)
    ) {
      answer.push("A")
    } else {
      answer.push("B")
    }
  }
  return answer
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))
/**
 * 풀이 시간 : 3:00
 *
 * 풀이 과정 : 조건문 사용
 *
 * 풀이 참고 및 Learning :
 */
