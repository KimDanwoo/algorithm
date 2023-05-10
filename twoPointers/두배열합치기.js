// function solution(arr) {
//   let answer = arr[0].concat(arr[1]).sort((a, b) => a - b)
//   return answer
// }

function solution(arr1, arr2) {
  let answer = []
  let n = arr1.length
  let m = arr2.length
  let p1 = 0
  let p2 = 0
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
    else answer.push(arr2[p2++])
  }
  while (p1 < n) answer.push(arr1[p1++])
  while (p2 < m) answer.push(arr2[p2++])
  return answer
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]))
/**
 * 풀이 시간 : 00:53
 *
 * 풀이 과정 :
 * 첫번째로 간단하게 concat을 사용해 합쳤다.
 * 하지만 시간복잡도 부분에서 투포인터 알고리즘이 훨씬 빠르기때문에
 * 투포인터를 사용해 새로운 배열을 만들었다.
 *
 * 풀이 참고 및 Learning :
 */
