function solution(n) {
  const stack = []
  const isBracket = (b) => b === '(' || b === '{' || b === '['
  const isMachBracket = (open, close) =>
    (open === '(' && close === ')') ||
    (open === '[' && close === ']') ||
    (open === '{' && close === '}')
  for (let i = 0; i < n.length; i++) {
    const bracket = n[i]
    if (isBracket(bracket)) {
      stack.push(bracket)
    } else {
      const last = stack.pop()
      if (!last || isMachBracket(last, bracket)) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(solution('(()())[)'))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : stack 자료구조 연습용
 *
 * 풀이 참고 및 Learning :
 */
