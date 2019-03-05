//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');//import body-parser

app.use(bodyParser.urlencoded({extended: false})) //harus berada diatas semua endpoint

//method get
app.get('/test', (req, res)=>{
    res.end("ini get XI RPL ");
});

//method post
app.post('/test', (req, res)=>{
    res.end("ini post XI RPL ")
});

//endpoint get dengan menggunakan parameter
app.get('/siswa/:nama', (request, response)=> { // :nama merupakan parameter
    let namaSiswa = request.params.nama;// deklarasi variable namaSiswa
    response.end("menampilkan nama siswa "+ namaSiswa);
});
//endpoint  post dengan menggunakan body-parser untuk mengirimkan data
app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.nama;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru ' + namaSiswa + ', yang beralamat di ' + alamat);
});
//endpoint delete, data yang diakses secara spesifik dengan menggunakan parameter
app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id '+ id + ' telah dihapus, dengan nama: '+namaSiswa);
});
//endpoint update
app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id: ' + id +' telah diupdate');
});
//inisialisasi port
app.listen('8080', (e)=>{
    console.log(e);
});