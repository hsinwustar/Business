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
    db.query('select * from supplier', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('supplier', {title: '供应商管理', datas: []});
        } else {

            res.render('supplier', {title: '供应商管理', datas: rows});
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
    var b_id = req.body.b_id;
    var b_name = req.body.b_name;
    var b_address = req.body.b_address;
    var b_tel = req.body.b_tel;
    var b_person = req.body.b_person;
    db.query("insert into supplier(b_id,b_name,b_address,b_tel,b_person) values('" + b_id + "','" + b_name + "','"+ b_address + "','" + b_tel + "','" + b_person + "')", function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/supplier');
        }
    })
});

/**
 * 删
 */
router.get('/b_del/:b_id', function (req, res) {
    var b_id = req.params.se_id;
    db.query("delete from supplier where b_id=" + b_id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/supplier')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:b_id', function (req, res) {
    var b_id = req.params.b_id;
    console.log(b_id);
    db.query("select * from supplier where b_id=" + b_id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("b_update", {datas: rows});       //直接跳转
        }
    });
});
router.post('/b_update', function (req, res) {
    var b_id = req.body.b_id;
    var b_name = req.body.b_name;
    var b_address = req.body.b_address;
    var b_tel = req.body.b_tel;
    var b_person = req.body.b_person;
    db.query("update supplier set b_id='"+b_id+"', b_name='" + b_name + "',b_address='"+b_address+"', b_tel= '" + b_tel + "',b_person='"+b_person+"' where b_id=" + b_id, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/supplier');
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
        case "b_id":
            var sql="select *from supplier where b_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("supplier",{title:'供应商管理',datas:rows});
                }
            })
            break;
        case "b_name":
            var sql="select *from supplier where b_name like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("supplier",{title:'供应商管理',datas:rows});
                }
            })
            break;
        case "b_address":
            var sql="select *from supplier where b_address like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("supplier",{title:'供应商管理',datas:rows});
                }
            })
            break;
        case "b_tel":
            var sql="select *from supplier where b_tel like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("supplier",{title:'供应商管理',datas:rows});
                }
            })
            break;
        case "b_person":
            var sql="select *from supplier where b_person like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("supplier",{title:'供应商管理',datas:rows});
                }
            })
            break;
    }

});


module.exports = router;