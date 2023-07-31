// function solution(participant, completion) {
//   let answer = ''
//   const player = new Set(completion)
//   // for (let x of participant) {
//   //   player.delete(x)
//   // }
//   console.log(player)
//   return answer
// }

function solution(participant, completion) {
  const playerHash = new Map()

  for (const player of participant) {
    playerHash.set(player, (playerHash.get(player) || 0) + 1)
  }

  for (const player of completion) {
    playerHash.set(player, playerHash.get(player) - 1)
  }

  for (const [key, value] of playerHash) {
    if (value !== 0) {
      return key
    }
  }

  return null
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
)
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 * hash.get()
 * hash.set()
 * hash.set()
 * 및 hash다루기 기본을 파악할 수 있는 문제였다.
 *
 * 풀이 참고 및 Learning :
 */
