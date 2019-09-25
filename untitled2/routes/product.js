var express = require('express');
var db = require("./db.js");
var qs = require('querystring');
var url = require('url');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    db.query('select * from product', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('product', {title: '人员管理', datas: []});
        } else {

            res.render('product', {title: '人员管理', datas: rows});
        }
    })
});

router.get('/search', function (req, res, next) {
    var urls=url.parse(req.url).query;
    var inputs=qs.parse(urls)['text_change'];
    var selects=qs.parse(urls)['select_change'];
        switch (selects) {
            case "id":
                var sql = "select * from product where pr_id like '%" + inputs + "%' ";
                db.query(sql, function (err, rows) {
                    if (err) {
                        res.end("查询失败：", err)
                    } else {
                        res.render("product", {title: '商品管理', datas: rows});
                    }
                });
                break;
            case "forms":
                var sql = "select * from product where pr_forms like '%" + inputs + "%' ";
                db.query(sql, function (err, rows) {
                    if (err) {
                        res.end("查询失败：", err)
                    } else {
                        res.render("product", {title: '商品管理', datas: rows});
                    }
                });
                break;
            case "name":
                var sql = "select * from product where pr_name like '%" + inputs + "%' ";
                db.query(sql, function (err, rows) {
                    if (err) {
                        res.end("查询失败：", err)
                    } else {
                        res.render("product", {title: '商品管理', datas: rows});
                    }
                });
                break;
        }

});
router.get('/add_pro',function (req,res,next) {
    res.render('add_pro');
});
router.post('/add_pro', function (req, res) {
    var pr_id = req.body.pr_id;
    var pr_forms = req.body.pr_forms;
    var pr_name = req.body.pr_name;
    var pr_pri = req.body.pr_pri;
    var pr_num = req.body.pr_num;
    var pr_ad = req.body.pr_ad;

    // var {proid,proforms,proname,propri,pronum,proaddr}=req.body;
    var sql="insert into product(pr_id,pr_forms,pr_name,pr_pri,pr_num,pr_ad) values('"
        + pr_id + "','" +pr_forms+"','"+pr_name+"',"+pr_pri +","+ pr_num+",'" +pr_ad + "')";

    db.query(sql, function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/product');
        }
    })
});

router.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.query("delete from product where pr_id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/product')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
var sql="select * from product where pr_id=" + id;
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("update_pro", {datas: rows});       //直接跳转
        }
    });
});
router.post('/update_pro', function (req, res) {
    console.log("hello")
    var pr_id = req.body.pr_id;
    var pr_forms = req.body.pr_forms;
    var pr_name = req.body.pr_name;
    var pr_pri = req.body.pr_pri;
    var pr_num = req.body.pr_num;
    var pr_ad = req.body.pr_ad;
    // var sql="update product set proid='"+proid+"',proforms='" + proforms + "',proname= '"
    //     + proname +"',propri= " + propri +",pronum= " + pronum +",proaddr= '" + proaddr + "'";
    var sql="update product set pr_forms='" + pr_forms + "',pr_name= '"
        + pr_name +"',pr_pri= " + pr_pri +",pr_num= " + pr_num +",pr_ad= '" + pr_ad + "' where pr_id='" + pr_id+"'";
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/product');
        }
    });
});
module.exports = router;
