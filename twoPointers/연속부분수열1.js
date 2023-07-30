function solution(n, m, arr) {
  let answer = 0,
    lt = 0
  sum = 0
  for (rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]
    if (sum === m) answer++
    while (sum >= m) {
      sum -= arr[lt++]
      if (sum === 6) answer++
    }
  }
  return answer
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]))
/**
 * 풀이 시간 : 5:40~ 6:00
 *
 * 풀이 과정 :
 * 이중 for문을 생각할 수 있는 문제였지만
 * 투포인터 알고리즘을 사용하여 O(n)만큼 시간을 효율적으로사용할 수 있는
 * 문제였다. 문제만 한번 보고 떠올릴 수 있다면 좋았겠지만 좀 더 풀어봐야 감이 올듯하다.
 *
 * 풀이 참고 및 Learning :
 */
