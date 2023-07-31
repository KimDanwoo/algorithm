function solution(n, arr) {
  let result = 0,
    sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
  }
  result = sum
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n]
    result = Math.min(sum, result)
  }
  return result
}

console.log(solution(3, [3, 2, 5, 1, 8, 9, 2]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : 슬라이딩 윈도우 연습용
 *
 * 풀이 참고 및 Learning :
 */
