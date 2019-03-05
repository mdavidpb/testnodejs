//Create server

var express = require('express'); //import module express
var app = express(); //eksekusi module express

//eksekusi express dgn memanggil variabel app
app.get('/test', function(req,res){//simbol / yg berarti "root" atau halaman utama, function req(request) dan res(respone)
    res.send("abcdefgh") //mengirimkan respone dari http dan dikembalikan
})

app.listen('12345'); // definisi halaman port