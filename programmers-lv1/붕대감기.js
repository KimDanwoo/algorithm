/**
 * PCCP 기출문제 1번
 * 붕대감기
 * @param {array} bandage [시전 시간, 초당 회복량, 추가 회복량]
 * @param {number} health
 * @param {array} attacks attacks[i] [공격 시간, 피해량]
 * @returns
 */
function solution(bandage, health, attacks) {
  // t: 시전 시간
  // x: 초당 회복량
  // y: 추가 회복량
  const [t, x, y] = bandage
  let curHealth = health
  let continuousHeal = 0
  let tick = 0
  while (attacks.length) {
    tick++
    const [attackTime, damage] = attacks[0]
    // 몬스터에게 공격받은 턴은 회복 불가
    if (attackTime === tick) {
      attacks = attacks.slice(1)
      curHealth -= damage
      continuousHeal = 0

      // 잔여 체력이 데미지보다 낮거나 같다면 사망
      if (curHealth <= 0) return -1
    } else {
      curHealth += x
      continuousHeal++
      // 최대체력을 초과한 회복 불가
      if (curHealth >= health) {
        curHealth = health
        continue
      }
      // 연속 회복에 성공시 추가회복
      if (continuousHeal >= t) {
        curHealth += y
        continuousHeal = 0
      }
    }
  }

  return curHealth
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
)
