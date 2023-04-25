function solution(name, yearning, photo) {
  var answer = photo
    .map((users) =>
      users.map((user, idx) => (name.includes(user) ? yearning[idx] : 0))
    )
    .map((items) => items.reduce((a, b) => a + b, 0))
  return answer
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
)
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
