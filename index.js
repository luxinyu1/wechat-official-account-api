const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const httpsOption = { // set your https key and cert
	key: fs.readFileSync(""),
	cert: fs.readFileSync("")
}
app.get('/', function (req, res) {
	data = fs.readFileSync("newsList.json");
	res.send(data);
});
https.createServer(httpsOption, app).listen(3000, function () {
	console.log("服务器启动完成...");
});
