var apiai = require('apiai');

var app = apiai("784469cdbf5f43ea84d7f454a6a7c5fb>");

var request = app.textRequest('data.json', {
    sessionId: '1'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();