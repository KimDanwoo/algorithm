function solution(s) {
  const result = "YES"
  s = s.toLowerCase().replace(/[^a-z]/g, "")
  if (s.split("").reverse().join("") !== s) return "NO"
  return result
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"))
/**
 * 풀이 시간 : 3:00
 *
 * 풀이 과정 : 정규식과 split, reverse, join 사용해서 회문문자열을 비교했다.
 * 
 *
 * 풀이 참고 및 Learning :
 */
