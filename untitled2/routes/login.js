var express = require('express');
var connect=require('./db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});
router.post('/main',function (req, res, next) {
    var user = req.body.user;
    var pwd = req.body.pwd;
    var {user,pwd}=req.body;//user=req.body.user pwd=req.body.pwd
    console.log(user,pwd);
    var queryString = "select * from login where user='" + user +"'";
    connect.query(queryString,function (err,rows) {
        if (err){
            return;
        }else if(rows.length==0){
            res.locals.error='此用户不存在';
            res.render('login', { title: 'error' });
        }else{
            if(rows[0].pwd==pwd){
                res.render('main');
            }else{
                res.render('login', { title: 'error' });
            }
        }
    })
})

module.exports = router;
