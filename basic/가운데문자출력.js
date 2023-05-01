function solution(s) {
  let result = "",
    mid = Math.floor(s.length / 2)
  if (s.length % 2 === 0) {
    result = s.substr(mid, 2)
  } else {
    result = s.substr(mid, 1)
  }
  return result
}

console.log(solution("stua5dy"))
/**
 * 풀이 시간 :3:00
 *
 * 풀이 과정 :substr 사용
 *
 * 풀이 참고 및 Learning :
 */
