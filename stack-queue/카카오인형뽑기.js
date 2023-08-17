function solution(board, moves) {
  let answer = 0
  let stack = []
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1]
        board[i][pos - 1] = 0
        if (stack[stack.length - 1] === tmp) {
          stack.pop()
          answer += 2
        } else {
          stack.push(tmp)
        }
        break
      }
    }
  })
  return answer
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
]

let moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves))
/**
 * 풀이 시간 : 20:00 ~ 20:27
 *
 * 풀이 과정 : stack을 사용해서 인형위치를 탐색 후 0이 아니면 stack에 넣어주고
 * stack에 상단에 같은 번호가 있으면 answer에 +2를 해줬다.
 * 매우 간단한 stack문제라고는 하지만 그래도 고민을 좀 했다.
 * stack자료구조문제를 좀 더 풀어서 익숙해질 필요가 있다.
 *
 * 풀이 참고 및 Learning :
 */
