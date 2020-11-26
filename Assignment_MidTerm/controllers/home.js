var express = require('express');
var router = express.Router();
var posts	= require.main.require('./models/postModel.js');
const {render}=require('ejs');
router.get('/', (req,res)=>{

res.render('home/index',
{
    userlist:result
})
})
module.exports.router;