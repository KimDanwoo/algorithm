function solution(phone_book) {
  phone_book.sort() // 전화번호를 오름차순으로 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    const currentNumber = phone_book[i]
    const nextNumber = phone_book[i + 1]

    if (nextNumber && nextNumber.startsWith(currentNumber)) {
      return false // 접두사인 경우가 발견되면 false 반환
    }
  }

  return true // 접두사인 경우가 없으면 true 반환
}

console.log(solution(['12', '123', '1235', '567', '88']))
/**
 * 풀이 시간 :
 *
 * 풀이 과정 : 정렬후 startsWith로 중복값 확인!
 *
 * 풀이 참고 및 Learning :
 */
