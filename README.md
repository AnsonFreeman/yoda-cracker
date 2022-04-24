# YodaCracker

### 简介
Yoda是美团的人机验证项目，常用于美团的敏感操作，如 [登录](https://ebooking.meituan.com/ebk/login/login.html) 等。<br> 

* 本项目旨在研究Yoda滑块相关的自动化方案。
* 本项目仅用于研究学习，请勿用于其他用途（包括但不限于数据抓取、模拟登录、网络攻击）。
* 作者坚决抵制一切违法犯罪行为。

<br>


### 安装
```shell
npm install
```

### 启动
```shell
node run.js
```

### 调用

#### 运行测试脚本
```shell
sh test.sh 
```

#### 接口调用
```shell
curl "127.0.0.1:9090?request_code={request_code}"
```

#### 返回示例

成功
```json
{"status":1,"data":{"response_code":"2561cbe630104c049de114e8b086c233"},"error":null}
```

失败
```json
{"status":0,"data":null,"error":{"code":121079,"message":"验证失败,请重新操作"}}
```