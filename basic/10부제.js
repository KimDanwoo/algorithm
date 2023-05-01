function solution(num, arr) {
  let result = 0
  for (x of arr) {
    if (x % 10 === num) {
      result += 1
    }
  }
  return result
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
