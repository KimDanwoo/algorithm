function solution(progresses, speeds) {
  const answer = []
  const daysLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  )

  let count = 1 // 배포되는 기능 개수를 카운트하기 위한 변수
  let maxDay = daysLeft[0] // 최대 남은 일수를 저장하는 변수

  for (let i = 1; i < daysLeft.length; i++) {
    if (daysLeft[i] <= maxDay) {
      count++
    } else {
      count = 1
      maxDay = daysLeft[i]
    }
  }
  answer.push(count)
  return
}

// function solution(progresses, speeds) {
//   const leftDays = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

//   return leftDays.reduce(
//     (acc, curr, i) => {
//       if (curr <= acc.기준 && acc.result.length > 0) {
//         acc.result[acc.result.length - 1] += 1;
//       } else {
//         acc.result.push(1);
//         acc.기준 = curr;
//       }
//       return acc;
//     },
//     { result: [], 기준: leftDays[0] }
//   ).result;
// }

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
