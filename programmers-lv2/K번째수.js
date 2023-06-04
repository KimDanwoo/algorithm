function solution(array, commands) {
  let result = []
  for (let c of commands) {
    const [start, end, target] = c
    const slicedArr = array.slice(start - 1, end)
    const ascendingArr = slicedArr.sort((a, b) => a - b)
    result.push(ascendingArr[target - 1])
  }

  return result
}

solution(
  [1, 2, 3, 4, 5],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
)

/**
 * 풀이 시간 : 03:58 ~ 04:07
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
