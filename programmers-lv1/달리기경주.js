function solution(players, callings) {
  let rankMap = {}
  players.forEach((player, i) => {
    rankMap[player] = i
  })

  callings.forEach((call) => {
    let currentRank = rankMap[call]
    if (currentRank > 0) {
      let prevPlayer = players[currentRank - 1]

      players[currentRank - 1] = call
      players[currentRank] = prevPlayer

      rankMap[call]--
      rankMap[prevPlayer]++
    }
  })

  return players
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
)
