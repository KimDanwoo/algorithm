function solution(n, k, arr) {
  let tmp = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(arr[i] + arr[j] + arr[k])
      }
    }
  }
  return Array.from(tmp).sort((a, b) => b - a)[k - 1]
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]))
/**
 * 풀이 시간 : 5:12
 *
 * 풀이 과정 : Set을 사용해 중복 제거 후 합친 값을 정렬해서
 * k번째 값을 구했습니다.
 *
 * 풀이 참고 및 Learning :
 */
