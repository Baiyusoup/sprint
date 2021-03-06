---
title: diff算法
date: 2021-07-21
categories: 
 - vue系列
---

## 作用
diff算法的核心在于在尽可能小变动的前提下找到需要更新的节点，直接调用原生相关DOM方法修改视图。算法比较节点不同时，只会进行同层节点的比较，不会跨层进行比较，这也大大减少了算法复杂度。

## 原理
简单来说，过程大概就是同级比较，在比较子节点
1. 先是新节点是不是文本节点，用新节点的文本替换掉旧节点的文本。
2. 然后判断一方有子节点，另一个方没有子节点的情况，在这种情况下，只需要将旧节点的子节点删除或者替换掉就行了
3. 如果双方都有子节点的话，那么进行子节点的比较以及递归比较

在比较双方的子节点时，采用的做法是双端比较，同时从新旧节点的children的两端开始比较，不断地往中间逼近，
新前和旧前、
新后与新后、
新后与旧前，如果匹配成功，将当前真实的dom节点，移动到旧后的后面、
新前与旧后，如果匹配成功，将当前旧后映射的真实的dom节点，移动到旧前映射的dom的前面
比较，
如果都不满足以上四种情况，那么就通过节点的key找到旧节点中可复用的节点，进行相关操作（patchNode，将这个真实的dom移动到旧前的前面）。如果没有找到就说明新前节点是新节点，直接创建一个新dom节点插入当前新前的位置。


## vue的diff
在触发响应式的时候，调用patch方法。在patch方法里面做的事情就是判断当前同层的虚拟结点是否同一个的节点。如果不是的话，就直接一顿操作将新虚拟节点生成的真实dom节点调换调这个旧节点所映射的真实的dom。

如果是的话，那么就进入patchNode这个函数里面。这个函数主要就是判断它俩是不是文本节点、是不是两个都有子节点。如果是文本节点，那么主要的操作就是用新节点的文本替换掉旧节点的文本，然后此次patchNode结束。如果说存在一方有子节点另一方没有子节点，那么主要做的事就是直接删除旧节点的子节点所映射的dom或者用新节点的子节点创建的dom去替换掉旧节点的子节点。

如果说两者都有，那么就会进入diff的核心函数updateChildren。在这里函数里，所采用的比较是双端比较，就是说创建四个指针，新前、新后，旧前和旧后，同时从新旧节点children的两端开始比较，不断地往中间逼近。比较的过程中主要分为四种情况，新前和旧前比较、旧前和旧后比较、新后和旧前比较、新前和旧后比较。如果命中的话，基本的操作都是调用patchNode，进行递归diff，完事后移动相应的指针。不过这四种情况里面后面两种情况会多一些处理。

新后和旧前命中的情况是，在调用完patchNode之后，需要将旧前指向的dom节点移动到旧后所映射的dom后面。

新前和旧后命中的情况是，还需要多做的一步是将旧后所映射的dom节点移动到旧前所映射的dom前面。

如果以上四种情况都没有命中的话，那么就会在那堆还没比较过旧节点中找到和新前节点相用的key进行复用。

如果没有找到，就说明新前节点是一个新节点，

如果找到的话，就判断新前节点和这个key所对应的旧节点是否相同，如果不同就采取和没有找的情况一样的做法。

如果相同那么就将这个旧节点移动到旧前节点所映射的dom前面。