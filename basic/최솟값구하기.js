// 1번
function solution(arr) {
  let answer,
    min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
  }
  answer = min
  return answer
}

// 2번
function solutionTwo(arr) {
  return Math.min(...arr)
}

// 3번
function solutionThree(arr) {
  return Math.min.apply(null, arr)
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]))
console.log(solutionTwo([5, 3, 7, 11, 2, 15, 17]))
console.log(solutionThree([5, 3, 7, 11, 2, 15, 17]))
/**
 * 풀이 시간 :1:00
 *
 * 풀이 과정 : 작은값 비교
 * Math 함수 사용
 *
 * 풀이 참고 및 Learning :
 */
