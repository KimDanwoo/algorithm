function solution(first, second) {
  const stringHash = new Map()
  for (let x of first) {
    if (stringHash.has(x)) {
      stringHash.set(x, stringHash.get(x) + 1)
    } else {
      stringHash.set(x, 1)
    }
  }
  for (let x of second) {
    if (!stringHash.has(x) || stringHash.get(x) === 0) {
      return 'NO'
    }
    stringHash.set(x, stringHash.get(x) - 1)
  }
  return 'YES'
}

console.log(solution('AbaAeCe', 'baeeACA'))
console.log(solution('abaCC', 'Caaab'))
/**
 * 풀이 시간 : 1:30 ~ 1:45
 *
 * 풀이 과정 :
 * hash로 배열의 갯수를 추가하면서 비교하는 문자배열의 값이 있으면
 * 빼주면서 모든 for문이 다 돌면 true, 중간에 값이 비어있으면 false의 string을 리턴
 * 
 *
 * 풀이 참고 및 Learning :
 */
