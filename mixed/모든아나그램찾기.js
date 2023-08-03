function solution(string, t) {
  let answer = 0
  let stringHash = new Map()
  let targetHash = new Map()
  let len = t.length - 1
  let leftKey = 0
  for (let targetKey of t) {
    if (targetHash.has(targetKey)) {
      targetHash.set(targetKey, targetHash.get(targetKey) + 1)
    } else {
      targetHash.set(targetKey, 1)
    }
  }
  for (let i = 0; i < len; i++) {
    if (stringHash.has(string[i])) {
      stringHash.set(string[i], stringHash.get(string[i]) + 1)
    } else {
      stringHash.set(string[i], 1)
    }
  }
  for (let rightKey = len; rightKey < string.length; rightKey++) {
    if (stringHash.has(string[rightKey])) {
      stringHash.set(string[rightKey], stringHash.get(string[rightKey] + 1))
    } else {
      stringHash.set(string[rightKey], 1)
    }
    if (compareMap(targetHash, stringHash)) {
      answer++
    }
    stringHash.set(string[leftKey], stringHash.get(string[leftKey]) - 1)
    if (stringHash.get(string[leftKey]) === 0) {
      stringHash.delete(string[leftKey])
    }
    leftKey++
  }
  return answer
}

function compareMap(map1, map2) {
  if (map1.size !== map2.size) {
    return false
  }
  for (let [key, value] of map1) {
    if (!map2.has(key) && map2.get(key) !== value) {
      return false
    }
  }
  return true
}

console.log(solution('bacaAacbaccba', 'abc'))
/**
 * 풀이 시간 : 8:00 ~ 8:45
 *
 * 풀이 과정 :
 * 우선 투포인트,슬라이딩윈도우,해쉬를 전부 사용하며 풀어야하는 문제였는데.
 * 문제만 보고 이해를 하는건 어렵지 않았지만 어떤식으로 구현해야 할지 조금 고민을 많이 할 수 밖에 없었다.
 * 3가지 알고리즘을 사용해 시간복잡도를 O(n)만큼 줄일수 있어서 재미있는 문제였구나...
 * 이중 for문을 사용해 쉽게 풀 수 있었지만 그래도 배우고자 하는 알고리즘을 적당히 잘 녹였다.
 *
 *
 * 풀이 참고 및 Learning :
 */
