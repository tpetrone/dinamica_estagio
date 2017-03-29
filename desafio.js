var request = require('request');
request('https://www.receitaws.com.br/v1/cnpj/26742035000190', function (error, response, body) {
  var jsonObject = JSON.parse(body);
  console.log(jsonObject.nome)
});
