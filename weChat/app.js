'use strict'
var Koa = require('koa');
var path = require('path')
var wechat = require('./wechat/g');
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
    wechat:{
        appID:'******************',
        appSecret:'********************',
        token:'LWechat',
        getAccessToken: function(){
        	return util.readFileAsync(wechat_file)
        },
        saveAccessToken: function(data){
        	data = JSON.stringify(data)
        	return util.writeFileAsync(wechat_file,data)
        }
    }
}
var app = new Koa();
app.use(wechat(config.wechat));
app.listen(80,'127.0.0.1');
console.log('Listening: 80');