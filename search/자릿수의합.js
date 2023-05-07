
function solution(arr) {
  let answer = 0
  let max = 0
  for (let x of arr) {
    //     let sum = 0
    //     let tmp = x
    //     while (tmp) {
    //       sum += tmp % 10
    //       tmp = Math.floor(tmp / 10)
    //     }
    //     if (max
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0)
    if (max < sum) {
      max = sum
      answer = x
    }
    if (sum === max) {
      if (x > answer) {
        answer = x
      }
    }
  }
  return answer
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]))
/**
 * 풀이 시간 : 5:00
 *
 * 풀이 과정 : 각 인수의 자릿수를 구해준 뒤 누적해주고
 * 누적 후 값을 비교해서 가장 큰 값의 첫번째 값을 리턴해주는
 * 코드를 작성했습니다.
 * while문 과 내장 함수 사용코드로 작성해봤습니다.
 *
 * 풀이 참고 및 Learning :
 */
