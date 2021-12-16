const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static('public'));

app.listen(port, () => console.log('Servidor corriendo por el puerto '+ port));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));