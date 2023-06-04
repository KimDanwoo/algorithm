function solution(numbers) {
  return numbers.map((v) => v + "").sort((a, b) => b + a - (a + b))
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9])
solution([3, 30, 34, 5, 9])
