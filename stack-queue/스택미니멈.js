class MinStack {
  constructor() {
    this.stack = []
    this.minStack = [] // 최소값을 저장하기 위한 스택
  }

  push(x) {
    this.stack.push(x)
    if (this.minStack.length === 0 || x <= this.getMin()) {
      this.minStack.push(x)
    }
  }

  pop() {
    const popped = this.stack.pop()
    if (popped === this.getMin()) {
      this.minStack.pop()
    }
    return popped
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.stack[this.minStack.length - 1]
  }
}

const stack = new MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
stack.getMin() // -3
stack.pop()
stack.top() // 0
stack.getMin() // -2
