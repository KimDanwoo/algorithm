function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1)
        arr.splice(j - 1, 1)
      }
    }
  }
  return arr
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]))
/**
 * 풀이 시간 :5:00
 *
 * 풀이 과정 : 이중 for문 사용
 *
 * 풀이 참고 및 Learning :
 */
