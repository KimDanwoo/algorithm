function solution(bracket) {
  let answer = 0
  let stack = []
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === '(') stack.push(bracket[i])
    else {
      stack.pop()
      if (bracket[i - 1] === ')') {
        answer += 1
      } else {
        answer += stack.length
      }
    }
  }

  return answer
}

console.log(solution('(((()())(())()))(())'))
/**
 * 풀이 시간 : 20:45 ~ 21:05
 *
 * 풀이 과정 : stack을 사용해서 여는괄호 닫는괄호 확인
 * for of로만 접근하려고 했는데 바로 앞의 값을 확인할 수 있어서
 * for문을 사용했다. 
 *
 * 풀이 참고 및 Learning :
 */
