function solution(s) {
  const numberOnly = s.replace(/[^0-9]/g, "")
  const answer = Number(numberOnly)
  return answer
}

console.log(solution("g0en2T0s8eSoft"))
/**
 * 풀이 시간 : 1:00
 *
 * 풀이 과정 : 정규식을 이용해 숫자만 남기고 문자 지우기
 *
 * 풀이 참고 및 Learning :
 * 변수화를 하면 가독성이 높아진다.
 */
