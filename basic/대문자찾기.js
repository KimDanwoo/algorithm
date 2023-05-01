function solution(str) {
  let answer = 0
  // for (let x of str) {
  //   if (x === x.toUpperCase()) answer += 1
  // }
  for (let x of str) {
    const num = x.charCodeAt()
    if (num >= 65 && num <= 90) answer += 1
  }
  return answer
}

console.log(solution("KoreaTimeGood"))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 * 대문자: 65~90(아스키)
 * 소문자: 97~122(아스키)
 */
