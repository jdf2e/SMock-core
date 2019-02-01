<div align="center">
  <h1>smock-core</h1>
  <p>SMock的核心代码，smock run的主要逻辑</p>
</div>

### 安装

```bash
npm install smock-core --save-dev
```

### 调用

```bash
let smockCore = require('smock-core');
smockCore.init({
  host:'xxx.xxx.xx.xx',
  domain:'xxx.com',
  projectName:'test'
})
```

### 参数说明

|Attributes|forma|describe
|---|---|---|
|host| string| 需要mock的文档地址ip或者域名
|domain|string| 需要mock的文档访问域名。一般和host配合使用，如果文档是IP不能直接访问的形式，那么此处需要传入相应的值
|path|string| 需要mock的文档数据请求路径，在swagger文档页面可以找到，如：/v2/api-docs
|port| integer| 需要mock的文档地址端口号， 默认80，如果协议配置为https，此参数则变为443
|projectName| string| 项目名，默认值swaggermock
|mockPort| string| 本地mock服务启动后的端口，默认为3000
|customProtocol| string| swagger文档支持的协议请求 http/https