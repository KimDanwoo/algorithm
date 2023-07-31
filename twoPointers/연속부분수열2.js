function solution(m, arr) {
  let result = 0,
    lt = 0,
    sum = 0
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]
    while (sum > m) {
      sum -= arr[lt++]
    }
    result += rt - lt + 1
  }
  return result
}

console.log(solution(5, [1, 3, 1, 2, 3]))
/**
 * 풀이 시간 : 13:15 ~ 13:33
 *
 * 풀이 과정 :
 * 포인터 두개로 더한값을 이동하면서 m의 값보다 커질때
 * lt값을 빼주며 result에 값을 넣어주는 방식으로 풀었다.
 *
 * 풀이 참고 및 Learning :
 */
