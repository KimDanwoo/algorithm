function solution(arr) {
  let result = 0
  const max = Number.MIN_SAFE_INTEGER
  for (let x of arr) {
    if (max < x) result = x
  }
  return result
}

console.log(solution([7, 3, 9, 5, 6, 12]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
