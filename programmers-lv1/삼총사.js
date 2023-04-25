function solution(number) {
  let result = 0
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          result += 1
        }
      }
    }
  }
  return result
}

function another(number) {
  let result = 0

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0
      return
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1)
    }
  }
  combination([], 0)
  return result
}

console.log(solution([-2, 3, 0, 2, -5]))
/**
 * 풀이 시간 : 3:00
 *
 * 풀이 과정 : for문을 3개 중복해서 사용해 더한값이 0이면 1을 반환했습니다.
 *
 * 풀이 참고 및 Learning :
 */
