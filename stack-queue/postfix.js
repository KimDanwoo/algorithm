function solution(str) {
  let answer = 0
  let stack = []
  for (let x of str) {
    if (!isNaN(x)) {
      stack.push(Number(x))
    } else {
      let rt = stack.pop()
      let lt = stack.pop()
      if (x === '+') stack.push(lt + rt)
      if (x === '*') stack.push(lt * rt)
      if (x === '-') stack.push(lt - rt)
      if (x === '/') stack.push(lt / rt)
    }
  }
  return stack.pop()
}

console.log(solution('352+*9-'))
console.log(solution('35-'))
/**
 * 풀이 시간 : 20:20~20:45
 *
 * 풀이 과정 : stack에 숫자를 넣어주고 연산일때 연산후의 값을 누적
 * 마지막 값을 return했다.
 *
 * 풀이 참고 및 Learning :
 */
