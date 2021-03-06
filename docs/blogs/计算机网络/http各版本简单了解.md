---
title: http简单了解
date: 2021-07-20
categories: 
 - 计算机网络
---

## http1.0
是http协议的第二个版本，在这个版本开始，http可以发送任何格式的内容。

除了GET请求，还引入了POST和HEAD请求方法。

请求和响应的格式改变了，除了数据部分，每次通信都必须有头信息。

只使用Last-Modified和Expires来控制缓存的生命周期

该版本主要的缺点是一个请求需要两倍的往返时间RTT的开销

## http1.1
这个版本是目前主流的http协议版本。
1. 引入了持久连接，即不需要显式声明Connection: keep-alive
2. 引入了管道机制，即同一个tcp连接里，客户端可以同时发送多个请求。
3. 新增了一些头字段Cache-Control，If-None-Match，ETag来控制缓存的生命周期，比之前的更加精准控制。
4. Host头处理
5. 支持断点续传
6. 新增了一些请求方法。put、options、delete

出现的问题是传输内容都是明文的；长连接可能会影响性能，因为有时候有些请求完之后就不会再请求；队头阻塞。


1.1的持续连接有两种工作方式，第一种是非流水线方式，客户端每收到一个响应后才能发出下一个请求，缺点在于服务器发送完一个响应后，TCP连接就处于空闲，浪费了服务器资源。第二种方式是客户端在收到响应报文之前就能够发送新的请求报文。

## http2.0
新增了一些功能
1. 二进制分帧
2. 多路复用
3. 首部压缩
4. 服务器推送
5. 请求优先

[GO](http2.md)
