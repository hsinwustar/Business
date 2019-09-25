var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var qs=require('querystring');
var url=require('url');


/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    db.query('select * from sell', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('sell', {title: '销售管理', datas: []});
        } else {

            res.render('sell', {title: '销售管理', datas: rows});
        }
    })
});
/**
 * 新增页面跳转
 */

// router.get('/pu_add', function (req, res) {
//     res.render('pu_add');
// });
router.post('/add', function (req, res) {
    var se_id = req.body.se_id;
    var se_date = req.body.se_date;
    var se_price = req.body.se_price;
    var se_number = req.body.se_number;
    var s_id = req.body.s_id;
    var pr_id = req.body.pr_id;
    var b_id = req.body.b_id;
    db.query("insert into sell(se_id,se_date,se_price,se_number,s_id,pr_id,b_id) values('" + se_id + "','" + se_date + "','"+ se_price + "','" + se_number + "','" + s_id + "','" + pr_id + "','"  + b_id +  "')", function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/sell');
        }
    })
});

/**
 * 删
 */
router.get('/pu_del/:se_id', function (req, res) {
    var se_id = req.params.se_id;
    db.query("delete from sell where se_id=" + se_id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/sell')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:se_id', function (req, res) {
    var se_id = req.params.se_id;
    console.log(se_id);
    db.query("select * from sell where se_id=" + se_id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("se_update", {datas: rows});       //直接跳转
        }
    });
});
router.post('/se_update', function (req, res) {
    var se_id = req.body.se_id;
    var se_date = req.body.se_date;
    var se_price = req.body.se_price;
    var se_number = req.body.se_number;
    var s_id = req.body.s_id;
    var pr_id = req.body.pr_id;
    var b_id = req.body.b_id;
    db.query("update sell set se_id='"+se_id+"', se_date='" + se_date + "',se_price='"+se_price+"', se_number= '" + se_number + "',s_id='"+s_id+"',pr_id='"+pr_id+"',b_id='"+b_id+"' where se_id=" + se_id, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/sell');
        }
    });
});
/**
 * 查询
 */
router.get('/search', function (req, res,next) {
    var urls=url.parse(req.url).query;
    var inputs=qs.parse(urls)['text_change'];
    var selects=qs.parse(urls)['select_change'];
    switch (selects){
        case "se_id":
            var sql="select *from sell where se_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "se_date":
            var sql="select *from sell where se_date like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "se_price":
            var sql="select *from sell where se_price like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "se_number":
            var sql="select *from sell where se_number like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "s_id":
            var sql="select *from sell where s_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "pr_id":
            var sql="select *from sell where pr_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
        case "b_id":
            var sql="select *from sell where b_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("sell",{title:'销售管理',datas:rows});
                }
            })
            break;
    }

});


module.exports = router;
