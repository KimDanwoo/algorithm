function processCommands(v, q) {
  let result = []

  for (let command of q) {
    let [a, b, c] = command

    if (a === 1) {
      let sum = 0
      for (let i = b; i <= c; i++) {
        sum += v[i]
      }
      result.push(sum)
    } else if (a === 2) {
      v[b] = c
    }
  }

  return result
}

let v = [1, 2, 3, 4, 5]
let q = [
  [1, 2, 4],
  [2, 3, 8],
  [1, 2, 4],
]
console.log(processCommands(v, q)) // [12, 16]

/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
