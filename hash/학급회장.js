function solution(s) {
  let stringHash = new Map()
  for (let x of s) {
    if (stringHash.has(x)) {
      stringHash.set(x, stringHash.get(x) + 1)
    } else {
      stringHash.set(x, 1)
    }
  }
  let max = Number.MIN_SAFE_INTEGER
  for (let [key, value] of stringHash) {
    console.log(key, value)
    if (max < value) {
      max = value
      answer = key
    }
  }
  return answer
}

console.log(solution('BACBACCACCBDEDE'))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 * hash.get()
 * hash.set()
 * hash.set()
 * 및 hash다루기 기본을 파악할 수 있는 문제였다.
 *
 * 풀이 참고 및 Learning :
 */
