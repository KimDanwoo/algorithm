function solution(arr) {
  let answer = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      answer += 1
    } else {
      break
    }
  }
  return answer
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
