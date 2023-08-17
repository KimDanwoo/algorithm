function solution(maps) {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const n = maps.length
  const m = maps[0].length
  let visited = Array.from(Array(n), () => Array(m).fill(0))

  let queue = [[0, 0]]
  visited[0][0] = 1

  while (queue.length !== 0) {
    let [x, y] = queue.shift()

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        visited[nx][ny] === 0
      ) {
        visited[nx][ny] = visited[x][y] + 1
        queue.push([nx, ny])
      }
    }
  }

  return visited[n - 1][m - 1] === 0 ? -1 : visited[n - 1][m - 1]
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
)

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
)
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 * 깊이/너비 우선 탐색(DFS/BFS)
 */
