function solution(targets) {
  targets.sort((a, b) => a[1] - b[1])

  let answer = 0
  let currentEnd = -1

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i]

    if (start >= currentEnd) {
      answer++
      currentEnd = end
    }
  }

  return answer
}

// 입출력 예시
const targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
]
console.log(solution(targets)) // 출력: 3

/**
 * 풀이 시간 :
 * 풀이 과정 :
 *
 */
