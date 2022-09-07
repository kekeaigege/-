// //导入http模块
// const http = require('http');
// //创建http实例
// const server = http.createServer()
// //为服务器示例绑定 request 事件,监听客户端请求
// server.on('request', (req,res) => {
//     const url = req.url;
//     console.log(`请求的地址是${req.url}`);
//     const method = req.method;
//     console.log(`请求的方法是${req.method}`);
//     const str = `请求的地址是${req.url},请求的方法是${req.method}`
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');
//     res.end(str)
// })
// server.listen(8089, () => {
//     console.log("running http://127.0.0.1:8089")
// })
const express = require('express');
const app = express();
app.listen(8089, () => {
    console.log("running http://127.0.0.1:8089")
})
app.get('/user', (req, res) => {
    res.send("name:可可")
})
app.post('/user/:ids/:username', (req, res) => {
    res.send("name:可可")
})
app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})