"use strict";

var express = require("express");

var app = express(); //构建服务器

var path = require("path");

var bodyParser = require("body-parser"); //引入body-parser模块，解析post请求


var router = require("./router.js"); //导入路由设计


app.listen(3000, function () {
  //绑定服务器端口
  console.log("ready...");
});
app.use('/public/', express["static"](path.join(__dirname, '../../public'))); //配置静态资源的访问

app.use(bodyParser.urlencoded({
  extended: false
})); //配置body-parser

app.use(bodyParser.json());
app.use(router); //路由

app.engine('html', require("express-art-template")); //渲染页面，配置渲染模版