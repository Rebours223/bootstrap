const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors'); 
var app = express();
var server = app.listen(3000);
//启用cors跨域，只允许http://127.0.0.1:5500的请求访问该服务端
app.use(cors({
  "origin":"http://127.0.0.1:5500"
})); 
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
/*使用路由器来管理路由*/