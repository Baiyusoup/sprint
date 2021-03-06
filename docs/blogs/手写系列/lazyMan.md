---
title: LazyMan
date: 2021-07-31
categories: 
 - JavaScript
---

[链接](https://www.jianshu.com/p/f1b7cb456d37)

```javascript
class _LazyMan {
  constructor(name) {
    this.tasks = []
    const task = () => {
      console.log(`Hi This is ${name}`)
      this.next()
    }
    this.tasks.push(task)
    setTimeout(() => {
      this.next()
    }, 0)
  }

  next() {
    const task = this.tasks.shift()
    task && task()
  }

  sleep(time) {
    this._sleepWrap(time, false)
    return this
  }
  sleepFirst(time) {
    this._sleepWrap(time, true)
    return this
  }
  _sleepWrap(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next()
      }, time * 1000)
    }
    if (fist) {
      this.tasks.unshift(task)
    } else {
      this.tasks.push(task)
    }
  }
  
}
```

```javascript
class A {
  constructor() {
    this.cbs = []
  }
  next() {
    const cbs = this.cbs
    if (cbs.length > 0) {
      const cb = cbs.unshift()
      cb(this.next.bind(this))
    }
  }

  log(val) {
    this.cbs.push(next => {
      console.log(val)
      next()
    })
    return this
  },
  wait(time) {
    this.cbs.push((next) => {
      setTimeout(next, time)
    })
    return this
  }
}
```