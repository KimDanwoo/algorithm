function solution(m, arr) {
  let answer = 0
  let n = arr.length
  arr = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1])
    let cnt = 1
    for (let j = 0; j < n; j++) {
      const pay = arr[j][0] + arr[j][1]
      if (j !== i && pay > money) break
      if (j !== i && pay <= money) {
        money -= pay
        cnt++
      }
    }
    answer = Math.max(cnt)
  }

  return answer
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
)
/**
 * 풀이 시간 :  15:00
 *
 * 풀이 과정 : 받아온 배열을 정렬 후 
 * for문을 통해 할인 금액을 구한뒤 
 * 총 금액에서 가격을 뺄 수 있는 가장 큰 수를 
 * 구했습니다.
 *
 * 풀이 참고 및 Learning :
 */
