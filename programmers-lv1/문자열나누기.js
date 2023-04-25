function solution(name, yearning, photo) {
  var answer = photo
    .map((users) =>
      users.map((user) => {
        const i = name.findIndex((e) => e === user)
        return yearning[i]??0
      })
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
 * 풀이 시간 : 5:00
 *
 * 풀이 과정 : photo로 가져온 배열의 각 인자를 name배열과 비교해서 값이 있으면 yearning의 해당 인덱스를 반환한후
 * 전체를 더한 값을 리턴했습니다.
 * 
 * 풀이 참고 및 Learning :
 */
