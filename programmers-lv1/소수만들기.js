function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function solution(numbers) {
  let count = 0
  const len = numbers.length
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(numbers[i] + numbers[j] + numbers[k])) {
          count++
        }
      }
    }
  }
  return count
}

console.log(solution([1, 2, 3, 4])) // Output: 1
console.log(solution([1, 2, 7, 6, 4])) // Output: 4
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : for문을 3개 중복해서 사용해 더한값이 0이면 1을 반환했습니다.
 *
 * 풀이 참고 및 Learning :
 */
