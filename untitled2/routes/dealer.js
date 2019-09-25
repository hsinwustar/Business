var express = require('express');
var db = require("./db.js");
var qs = require('querystring');
var url = require('url');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    db.query('select * from dealer', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('dealer', {title: '人员管理', datas: []});
        } else {

            res.render('dealer', {title: '人员管理', datas: rows});
        }
    })
});

router.get('/search', function (req, res, next) {
    var urls=url.parse(req.url).query;
    var inputs=qs.parse(urls)['text_change'];
    var selects=qs.parse(urls)['select_change'];
    switch (selects) {
        case "id":
            var sql = "select * from dealer where d_id like '%" + inputs + "%' ";
            db.query(sql, function (err, rows) {
                if (err) {
                    res.end("查询失败：", err)
                } else {
                    res.render("dealer", {title: '经销商管理', datas: rows});
                }
            });
            break;
        case "name":
            var sql = "select * from dealer where d_name like '%" + inputs + "%' ";
            db.query(sql, function (err, rows) {
                if (err) {
                    res.end("查询失败：", err)
                } else {
                    res.render("dealer", {title: '经销商管理', datas: rows});
                }
            });
            break;
    }

});
router.get('/add_dea',function (req,res,next) {
    res.render('add_dea');
});
router.post('/add_dea', function (req, res) {
    var {d_id,d_pname,d_ptel,d_name,pr_ad}=req.body;

    var sql="insert into dealer(d_id,d_pname,d_ptel,d_name,pr_ad) values('"
        + d_id + "','" +d_pname+"','"+d_ptel+"','"+d_name +"','" +pr_ad + "')";

    db.query(sql, function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/dealer');
        }
    })
});

router.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.query("delete from dealer where d_id='" + id+"'", function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/dealer')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;

    var sql="select * from dealer where d_id='" + id+"'";
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("update_dea", {datas: rows});       //直接跳转
        }
    });
});
router.post('/update_dea', function (req, res) {
    var {d_id,d_pname,d_ptel,d_name,pr_ad}=req.body;

    var sql="update dealer set d_pname='" + d_pname + "',d_ptel= '"
        + d_ptel +"',d_name= '" + d_name +"',pr_ad= '" + pr_ad + "' where d_id='" + d_id+"'";
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/dealer');
        }
    });
});
module.exports = router;
