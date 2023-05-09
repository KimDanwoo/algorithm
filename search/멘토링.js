function solution(arr) {
  let answer = 0,
    tmp = []
  const n = arr[0].length
  const m = arr.length
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0
      for (let k = 0; k < m; k++) {
        let pi = 0
        let pj = 0
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s
          if (arr[k][s] === j) pj = s
        }
        if (pi < pj) {
          cnt++
        }
      }
      if (cnt === m) {
        console.log(tmp.push([i, j]))
        answer++
      }
    }
  }
  console.log(tmp)
  return answer
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
)
/**
 * 풀이 시간 : 20:00
 *
 * 풀이 과정 : 배열의 길이 m과 배열당 길이 n을 구한뒤
 * 2중 포문을 통해 각 자릿수의 값을 확인하는 pi,pj를 선언하고
 * arr[k][s]값이 i또는 j값과 같을때 할당해줬습니다.
 * 그 후 앞의 값이 뒤에값보다 항상 클 경우에 cnt값을 더해줬습니다.
 * 그후 cnt값이 배열의 길이와 같을때를 구했습니다.
 *
 * 풀이 참고 및 Learning :
 *  블루투포스 를 통한 완전 탐색을 연습할 수 있는 예제 였고
 * for문을 효율적으로 사용하는 방법을 익히기에 좋은 문제였습니다.
 * 아직 문제를 쉽게 이해하지못하는것 같은 느낌이 조금 있는데
 * 이런 유형을 좀 더 풀어봐야할것같습니다.
 */
