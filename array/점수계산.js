function solution(arr) {
  let result = 0
  let plus = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      plus += 1
      result += plus
    } else {
      plus = 0
    }
  }
  return result
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
/**
 * 풀이 시간 : 1:00
 *
 * 풀이 과정 : for문 과 조건문 사용
 *
 * 풀이 참고 및 Learning :
 */
