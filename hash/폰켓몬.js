function solution(numbers) {
  var answer = 0
  const numberHash = new Map()
  for (let number of numbers) {
    if (numberHash.has(number)) {
      numberHash.set(number, numberHash.get(number) + 1)
    } else {
      numberHash.set(number, 1)
    }
  }
  return numberHash.size > numbers.length / 2
    ? numbers.length / 2
    : numberHash.size
}

function setSolution(numbers) {
  let max = numbers.length / 2
  let numberLength = [...new Set(numbers)].length
  return numberLength > max ? max : numberLength
}

console.log(solution([3, 3, 3, 2, 2, 4]))
console.log(setSolution([3, 3, 3, 2, 2, 4]))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 * Map, Set 다루기
 * 기본을 파악할 수 있는 문제였다.
 *
 * 풀이 참고 및 Learning :
 */
