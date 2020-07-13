/*需要注意的是，该文件暂未考虑总素材数大于20的情况*/
const request = require("request");
const fs = require("fs");

const accessToken = readAcessTokenFromFile();

function readAcessTokenFromFile() {
	let fileContent = fs.readFileSync("accessToken.json", "utf-8");
	fileContent = JSON.parse(fileContent);
	return fileContent.access_token;
}

const contents = {
	"type": "news",
	"offset": 0,
	"count": 20
};

function getNewsList(contents) {
	request({
		url: "https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=" + accessToken,
		method: "POST",
		json: true,
		headers: {
			"content-type": "application/x-www-form-urlencoded",
		},
		body: JSON.stringify(contents)
	}, function (error, response, body) {
		console.log(body);
		fs.writeFileSync("newsList.json", JSON.stringify(body), {
			flag: 'w',
			encoding: 'utf-8'
		});
	});
}

getNewsList(contents);