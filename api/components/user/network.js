//const { response } = require('express');
const express = require('express');
const response = require('../../../network/response')
const controller = require('./controller')


const router = express.Router();

router.get('/', function(req,res){
   const lista =controller.obtener();
   // res.send('Todo funciona')
   response.success(req,res,lista,200)
})

module.exports = router;