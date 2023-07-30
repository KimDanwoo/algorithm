function solution(n) {
  const stack = []
  const isOpenBracket = (ch) => ch === '('
  const isMachBracket = (open, close) => open === '(' && close === ')'
  for (let i = 0; i < n.length; i++) {
    const currentBracket = n[i]
    if (isOpenBracket(currentBracket)) {
      stack.push(currentBracket)
    } else {
      const lastBracket = stack.pop()
      if (!lastBracket || !isMachBracket(lastBracket, currentBracket)) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(solution('(())()'))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 */
