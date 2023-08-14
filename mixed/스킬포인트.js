function solution(total_sp, skills) {
  const N = skills.length + 1
  const graph = Array.from({ length: N + 1 }, () => [])
  const inDegree = Array.from({ length: N + 1 }, () => 0)
  const count = Array.from({ length: N + 1 }, () => 0)
  const queue = []

  for (let [a, b] of skills) {
    graph[b].push(a)
    inDegree[a]++
  }

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
      count[i] = 1
    }
  }

  while (queue.length > 0) {
    let cur = queue.shift()
    for (let next of graph[cur]) {
      count[next] += count[cur]
      inDegree[next]--
      if (inDegree[next] === 0) {
        queue.push(next)
      }
    }
  }

  let total_count = count.reduce((a, b) => a + b, 0)
  const sp = total_sp / total_count
  const answer = count.slice(1).map((val) => val * sp)

  return answer
}

console.log(
  solution(121, [
    [1, 2],
    [1, 3],
    [3, 6],
    [3, 4],
    [3, 5],
  ])
)
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 * 주어진 skills 배열을 기반으로 스킬트리를 구성한 후
 * 각 노드의 스킬 번호와 해당 스킬을 배우기 위한포인트를 포함하게 된다.
 * 각 스킬이 얼마나 많은 하위 스킬을 가지고 있는지 계산 한 후 이를 위해 DFS나 BFS를 사용한다.
 * 이 스킬 포인트값을 바탕으로 상위 스킬들의 스킬 포인트를 계산해준다.
 *
 *
 * 풀이 참고 및 Learning :
 */
