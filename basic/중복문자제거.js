function solution(n) {
  let result = ""
  for (let i = 0; i < n.length; i++) {
    if (n.indexOf(n[i]) === i) result += n[i]
  }
  return result
}

console.log(solution("ksekkset"))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
