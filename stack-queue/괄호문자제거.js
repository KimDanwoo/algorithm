function solution(brackets) {
  let stack = []
  for (let x of brackets) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x)
    }
  }
  return stack.join()
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : stack을 사용해서 괄호의 짝까지 pop해주고
 * 짝이 아닐경우 push해주는 아주 쉬운 stack문제
 * 바로바로 생각나지 않는건 경험부족이겠지.... 좀 더 풀어보면 
 * 쉽게 풀 수 있을듯..하다
 *
 * 풀이 참고 및 Learning :
 */
