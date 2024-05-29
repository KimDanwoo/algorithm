function solution(n, m, section) {
  let count = 0
  let i = 0
  while (i < section.length) {
    count++
    let start = section[i]
    let end = start + m - 1
    while (i < section.length && section[i] <= end) {
      i++
    }
  }
  return count
}

console.log(solution(5, 2, [1, 2, 3, 4, 5]))
