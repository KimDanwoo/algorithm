function solution(s) {
  let result = 0
  let hap = 0
  const stringHash = new Map()
  for (let str of s) {
    if (stringHash.has(str)) {
      stringHash.set(str, stringHash.get(str) + 1)
    } else {
      stringHash.set(str, 1)
    }
  }

  for (let [key, value] of stringHash) {
    console.log(key, value)
    if (hap < value) {
      hap = value
      result = key
    }
  }

  return result
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
