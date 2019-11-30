const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

const options = {
    target: "http://localhost:8080",
    changeOrigin:true,
}
 
const apiProxy = proxy(options)

app.use(express.static(__dirname))
app.use('/', apiProxy)
var server = app.listen(8088, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("地址：http://127.0.0.1:8088/#/admin");
})