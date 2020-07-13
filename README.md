# wechat-official-account-api
 
## 特性

提供了一种让个人开发者能够将微信公众号的文章列表发送到个人主体的微信小程序的方法。

## 使用

1. 配置环境所需的包
2. 将https证书的```.key```和```.pem```文件放置到https目录下
3. 在```accessToken.js```中填写小程序```appId```与```appSecret```
4. 使用```pm2```或其他```node```进程管理工具运行```index.js```开启API接口
