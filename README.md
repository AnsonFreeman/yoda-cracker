# YodaCracker

Yoda是美团的人机验证项目。本项目旨在研究Yoda滑块相关的破解方案。<br>

仅用于研究学习，请勿用于其他用途，坚决抵制一切违法行为。<br>


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