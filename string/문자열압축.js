function solution(str) {
  let result = ""
  let same = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i]
      if (same > 1) {
        result += same
        same = 1
      }
    } else {
      same += 1
    }
  }
  return result
}

console.log(solution("KKHSSSSSSSE"))
/**
 * 풀이 시간 : 3:00
 *
 * 풀이 과정 : for문을 사용해서 다음값과 비교하여 처리했습니다.
 *
 * 풀이 참고 및 Learning :
 */
