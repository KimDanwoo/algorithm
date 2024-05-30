function timeToMinutes(time) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function solution(plans) {
  plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]))
  let result = []
  let pausedTasks = []

  let currentTask = null
  let currentEndTime = null

  for (const [name, start, playTime] of plans) {
    const startTime = timeToMinutes(start)
    const currentPlaytime = parseInt(playTime, 10)

    while (currentTask && startTime >= currentEndTime) {
      result.push(currentTask)
      if (pausedTasks.length > 0) {
        ;[currentTask, remainingTime] = pausedTasks.pop()
        currentEndTime += remainingTime
      } else {
        currentTask = null
      }
    }

    if (currentTask) {
      const remainingTime = currentEndTime - startTime
      pausedTasks.push([currentTask, remainingTime])
    }

    currentTask = name
    currentEndTime = startTime + currentPlaytime
  }

  if (currentTask) {
    result.push(currentTask)
  }
  while (pausedTasks.length > 0) {
    const [task, _] = pausedTasks.pop()
    result.push(task)
  }
  return result
}

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ])
)
