const https = require("https");
const fs = require("fs");
const data = {
  appId: "", // place your appId here
  appSecret: "" // place your appSecret here
}
function getAcessToken(data) {
  const request = https.get(
    'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + data.appId + '&secret=' + data.appSecret,
    (response) => {
      response.on('data', (accessTokenJSON) => {
        console.log("已从微信方获取到新accessToken...")
        const d = JSON.parse(accessTokenJSON);
        var accessToken = d["access_token"];
        // Verify access token
        if (accessToken) {
          console.log("当前有效Token: " + accessToken);
          const timeInterval = d["expires_in"];
          const currentTime = Date.now();
          const fileData = {
            access_token: accessToken,
          }
          fs.writeFileSync("accessToken.json", JSON.stringify(fileData), {
            flag: 'w',
            encoding: 'utf-8'
          });
        } else {
          console.log("accessToken非法");
        }
      })
    }
  );
  request.on('error', (err) => {
    console.error(err);
  });
  request.end();
}
getAcessToken(data);