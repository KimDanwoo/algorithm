// 시간복잡도 O(N)
function solution(sequence, k) {
  const answer = [0, 1000]
  let [left, right] = [0, 0]
  let sum = sequence[0]
  while (right < sequence.length) {
    if (sum === k) {
      if (answer[1] - answer[0] > right - left) {
        answer[0] = left
        answer[1] = right
      }
      sum -= sequence[left++]
      sum += sequence[++right]
    } else if (sum > k) sum -= sequence[left++]
    else if (sum < k) sum += sequence[++right]
  }
  return answer
}

console.log(solution([1, 2, 3, 4, 5], 7))
/**
 * 풀이 시간 : 10:00
 *
 * 풀이 과정 : 
 * 리스트에 순차적으로 접근해야 할 때 두개의 점의 위치를 기록하면서 처리하는 투포인트 알고리즘으로 접근했습니다.
 * 1. 시작점과 끝점이 첫번째 원소의 인덱스를 가리키도록 한다.
 * 2. 현재 부분 합이 k와 같다면 카운트한다.
 * 3. 현재 부분 합이 k보다 크다면 right를 1씩 증가시킨다.
 * 4. 현재 부분 합이 k보다 작다면 left를 1씩 증가시킨다.
 * 5. 모든 경우를 확인할 때 까지 2-4번 과정을 반복한다.
 * 
 * 시간 복잡도 :
 * 매 루프마다 항상 두 포인터 중 하나는 1씩 증가하고 
 * 각 포인터가 n번 누적 증가해야 알고리즘이 끝납니다. 
 * 각각 배열 끝에 다다르는데 O(N)이라 둘을 합해도 여전히 O(N)입니다.
 * 
 * 풀이 참고 및 Learning : 투포인터 알고리즘 , 선형 복잡도
 */
