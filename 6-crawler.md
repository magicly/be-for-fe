# 网络爬虫

## 爬虫原理

web 是一个由 url 链接起来的图， 爬虫就是遍历这个图。

非通用搜索引擎（Google、Bing、百度等），一般都是爬取特定内容， 可以有针对性地分析内容结构， 通过 Dom 分析、网络抓包、Headless 浏览器等进行爬取， 简单高效。

完整的爬虫涉及到很多东西， 包括 IP 代理池、爬取频率、验证码、登录验证等等， 网上有很多这方面的资料， 大家自行搜索。

## Douban 图书

- 如何找到数据

- Base64 编码

- 找到解密方法
  - https://juejin.im/post/5c876baf6fb9a049ba426ac8
  - https://github.com/SergioJune/Spider-Crack-JS/blob/master/douban/main.js

## 图片爬虫

## Cheerio

简单理解， Node.js 里面的 jQuery。

- https://github.com/cheeriojs/cheerio

# 视频

[爬虫](https://www.bilibili.com/video/av71014473/?p=6)

# 作业

## 抓取豆瓣读书上关于某个主题的书籍内容

基础：

1. 包括标题、作者、出版社、出版时间、评价（人数和星级）、封面图片
2. 抓取图书的摘要， 在图书详情页
3. 整理成 excel（可以输出 csv 文件， 用 excel 打开即可）

进阶：

1. 考虑并发加速
2. 限制抓取速度（如 1s 发送一次请求）， 防止造成服务器太大压力，触发服务器反爬虫机制封 IP
3. 及时保存数据， 避免抓取第 100 页时网络异常导致程序奔溃，数据全部丢失， 还得从第一页开始爬取这种情况
4. 自己思考还有哪些可以做得更好的

## 选择一个自己感兴趣的网站， 爬取自己感兴趣的内容
