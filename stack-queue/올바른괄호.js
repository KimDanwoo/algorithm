function solution(brackets) {
  let stack = []
  const isOpenBracket = (b) => b === '('
  const isMachBracket = (open, close) => open === '(' && close === ')'
  for (let i = 0; i < brackets.length; i++) {
    if (isOpenBracket(brackets[i])) {
      stack.push(brackets[i])
    } else {
      const last = stack.pop()
      if (!last || !isMachBracket(last, brackets[i])) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(solution('(()(()))(())'))

/**
 * 풀이 시간 : 12:18 ~ 12:45
 *
 * 풀이 과정 :
 * 올바른 괄호의 정의는?
 * ) 가 더 많아지면 안 된다.
 * 마지막이 )로 끝나야 한다.
 * 총 갯수가 맞아야 한다.
 *
 * for of로 제출시 효율성 테스트가 통과하지 못하는데 왜그런지 조금 찾아봐야겠다.
 * 효율성이 무슨 30점 밖에 안나오지??
 * for 문을 사용하고 마지막 리턴값을 length를 비교하는게 true를 리턴하는것 보다 효율성이 좋은것같다.
 *
 * 풀이 참고 및 Learning :
 * for of 생각보다 가독성도 좋다.
 */
