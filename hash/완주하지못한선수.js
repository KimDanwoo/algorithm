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
 * hash 문제 풀이 추가, 시간복잡도 문제가 있어서
 * for문을 나누고 key값을 바로 리턴하며 효율성을 잡았다.
 *
 * 풀이 참고 및 Learning :
 */
