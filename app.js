var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send("Sup?");
});

var static_dir = './static';

app.get('/wifi', function (req, res) {
    res.sendfile(static_dir + '/prism_wifi.mobileconfig');
});

app.listen(8000, function () {
    console.log("Listening on port 8000.");
})
