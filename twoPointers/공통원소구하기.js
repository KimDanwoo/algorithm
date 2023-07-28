// function solution(n, m) {
//   const result = []
//   for (let i = 0; i < n.length; i++) {
//     for (let j = 0; j < n.length; j++) {
//       if (n[i] === m[j]) {
//         result.push(n[i])
//       }
//     }
//   }
//   return result.sort((a, b) => a - b)
// }

function solution(arr1, arr2) {
  let result = []
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let p1 = 0
  let p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1++])
      p2++
    } else if (arr1[p1] > arr2[p2]) p2++
    else p1++
  }
  return result
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]))
/**
 * 풀이 시간 : 15분
 *
 * 풀이 과정 : 일반 for문을 이용하여 먼저 풀었고
 * 그 후 2포인터 알고리즘을 사용해서 풀었다.
 *
 * 풀이 참고 및 Learning :
 * twoPointer 알고리즘과 배열 sort시 콜백값을 주지 않으면
 * 배열을 문자열로 주기 때문에 콜백함수를
 */
