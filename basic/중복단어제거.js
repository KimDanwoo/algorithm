function solution(arr) {
  return arr.filter((e, idx) => arr.indexOf(e) === idx)
}

console.log(solution(["good", "time", "good"]))
/**
 * 풀이 시간 : 1:00
 *
 * 풀이 과정 : filter와 indexOf로 중복제거
 *
 * 풀이 참고 및 Learning :
 */
