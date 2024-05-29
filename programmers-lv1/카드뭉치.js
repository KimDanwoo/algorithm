function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] === s) {
      cards1.shift()
    } else if (cards2[0] === s) {
      cards2.shift()
    } else {
      return 'No'
    }
  }

  return 'Yes'
}

console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
)

// 다른
function solution(cards1, cards2, goal) {
  let j = 0
  let k = 0
  for(let i = 0; i<goal.length; i++){
      if(cards1[i] === goal[j]) {
          j ++
      } else if (cards2[i] === goal[k]){
          k ++
      } else {
          return 'No'
      }
  }
  return 'Yes'
}