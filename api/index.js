const express = require('express');
const config = require('../config.js')
const app = express();
const user = require('./components/user/network');
//ROUTER
app.use('/api/user',user)   //Cuando llame al componente la ruta /ap/user llame al componente user llamado desde el require


app.listen(config.api.port, () =>{
    console.log('Api escuchando en el puerto: ', config.api.port)});