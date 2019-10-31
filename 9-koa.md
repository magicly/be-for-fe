# Koa

https://github.com/koajs/koa

## Koa 简介

跟[Express](https://github.com/expressjs/express/)的区别。

特点： 微框架、async 函数、middleware

## Koa 源码解读

### Application

https://github.com/koajs/koa/blob/master/docs/api/index.md

use 注册 middleware， listen 监听端口， 跟 Node.js 打通

### Context

https://github.com/koajs/koa/blob/master/docs/api/context.md

包含 request 和 response 对象， 分别是在 Node.js 的 request 和 response 封装了一些额外功能。

request 和 response 的一些常用功能直接挂在了 context 对象上， 方便使用。

### Request

[Node.js request 对象](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_incomingmessage)的封装。

https://github.com/koajs/koa/blob/master/docs/api/request.md

### Response

[Node.js response 对象](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_serverresponse)的封装。

https://github.com/koajs/koa/blob/master/docs/api/response.md

### Koa middlewares 原理

[compose](https://github.com/koajs/compose) 源代码

# 视频

- https://www.bilibili.com/video/av71014473/?p=11

# 作业

1. 将之前的作业用 Koa 重写
2. 练习 https://github.com/koajs/examples
