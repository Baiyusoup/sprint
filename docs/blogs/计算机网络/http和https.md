---
title: http和https
date: 2021-07-20
categories: 
 - 计算机网络
---

## http
http是一个简单的请求-响应协议，它通常运行在TCP之上。它所使用的报文格式基本是开始行、首部行以及报文主体。

特点是
1. 灵活可扩展，允许传输任意类型的数据
2. 简单快速
3. 无连接
4. 无状态

缺点是
1. 无状态
2. 明文传输
3. 队头阻塞

## https
https是由http+tls/ssl组成的。用来解决http安全问题。

https的最主要的作用是
1. 对数据进行加密，建立一个信息安全通道，来保证传输过程中的数据安全。
2. 对网站服务器进行真实身份认证。

[GO](https.md)
[参考资料](https://leetcode-cn.com/circle/discuss/cxn9hV/)