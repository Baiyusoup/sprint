---
title: 几个JS关键的原理
date: 2021-07-15
categories: 
 - 手写系列
---
new、call、apply、bind、instanceof
<!-- more -->

## new关键字
原理
1. 创建一个空对象
2. 将空对象与构造函数通过原型链联结起来
3. 将空对象作为构造函数的this对象
4. 如果构造函数没有返回对象，就返回这个空对象

```javascript
function myNew(F, ...args) {
  const f = {};
  f.__proto__ = F.prototype;
  const res = F.apply(f, args);
  return typeof res  === 'object' ? res : f;
}
```
## call关键字
call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

```javascript
Function.prototype.myCall = function(ctx, ...args) {
  const fn = Symbol('fn');
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
}
```

## apply关键字

```javascript
Function.prototype.myApply = function(ctx, args) {
  const fn = Symbol('fn');
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
}
```

## bind关键字
bind() 方法创建一个新的函数并返回，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
```javascript
Function.prototype.myBind = function (thatArg, ...args) {
  // 参数
  const baseArgs = Array.prototype.slice.call(arguments, 1)
  // 调用bind方法的函数本身
  const fToBind = this

  const fNOP = function () {}

  // 要返回的新函数
  const fBound = function() {

    return fToBind.apply(
      // 判断调用bind返回的函数是否是被new调用，如果是的话就用新创建的this代替硬绑定的this
      this instanceof fNOP ? this : oThis,
      baseArgs.concat(Array.prototype.slice.call(arguments))
    )
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()

  return fBound
}
```

## instanceof关键字
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```javascript
function myInstanceof(obj, Func) {
  if (typeof obj !== 'object') return;
  // 获取某构造函数的原型
  const prototype = Func.prototype;
  // 获取target的原型，即target.__proto__
  let proto = Object.getPrototypeOf(obj);
  while(proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```
