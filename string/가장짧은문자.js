function solution(s, t) {
  let result = []
  let p = 1000
  for (let x of s) {
    if (x === t) {
      p = 0
      result.push(p)
    } else {
      p++
      result.push(p)
    }
  }
  p = 1000
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0
      result.push(p)
    } else {
      p++
      result[i] = Math.min(result[i], p)
    }
  }
  return result
}

console.log(solution("teachermode", "e"))
/**
 * 풀이 시간 :5:00
 *
 * 풀이 과정 : 문자열 비교와 Math.min
 *
 * 풀이 참고 및 Learning :
 */
