function solution(arr) {
  let result = "YES"
  const n = arr.length
  arr = arr.toLowerCase()
  if (arr.split("").reverse().join("") !== arr) return "NO"
  return result
}
solution("goog")
/**
 * 풀이 시간 : 2:00
 *
 * 풀이 과정 : 문자열 탐색 및 회문문자 검색
 *
 * 풀이 참고 및 Learning :
 */
