function solution(n, arr) {
  let result = 0,
    hap = 0
  for (let i = 0; i < n; i++) hap += arr[i]
  for (let i = n; i < arr.length; i++) {
    hap += arr[i] - arr[i - n]
    result = Math.max(result, hap)
  }
  return result
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : 슬라이딩 윈도우 알고리즘을 사용해
 * for문이 한번 돌 동안 3개씩 더한 최고값을 리턴해줬다.
 * 슬라이딩 윈도우 알고리즘 개념 이해용
 * 풀이 참고 및 Learning :
 */
