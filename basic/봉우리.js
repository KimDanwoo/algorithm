function solution(arr) {
  let result = 0
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]
        let ny = j + dy[k]
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0
          break
        }
      }
      if (flag) result += 1
    }
  }
  debugger
  return result
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
)
/**
 * 풀이 시간 :10:00
 *
 * 풀이 과정 : 이중for문과 좌표값을 가지고 봉우리 여부 판단값 return
 *
 * 풀이 참고 및 Learning :
 */
