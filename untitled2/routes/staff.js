var express = require('express');
var db = require("./db.js");
var qs = require('querystring');
var url = require('url');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    db.query('select * from staff', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('staff', {title: '人员管理', datas: []});
        } else {

            res.render('staff', {title: '人员管理', datas: rows});
        }
    })
});

router.get('/search', function (req, res, next) {
    var urls=url.parse(req.url).query;
    var inputs=qs.parse(urls)['text_change'];
    var selects=qs.parse(urls)['select_change'];
    switch (selects) {
        case "id":
            var sql = "select * from staff where s_id like '%" + inputs + "%' ";
            db.query(sql, function (err, rows) {
                if (err) {
                    res.end("查询失败：", err)
                } else {
                    res.render("staff", {title: '商品管理', datas: rows});
                }
            });
            break;
        case "name":
            var sql = "select * from staff where s_name like '%" + inputs + "%' ";
            db.query(sql, function (err, rows) {
                if (err) {
                    res.end("查询失败：", err)
                } else {
                    res.render("staff", {title: '商品管理', datas: rows});
                }
            });
            break;
    }

});
router.get('/add_sta',function (req,res,next) {
    res.render('add_sta');
});
router.post('/add_sta', function (req, res) {
    // var proid = req.body.proid;
    // var proforms = req.body.proforms;
    // var proname = req.body.proname;
    // var propri = req.body.propri;
    // var pronum = req.body.pronum;
    // var proaddr = req.body.proaddr;

    var {s_id,s_name,s_age,s_sex,s_tel,s_pos,s_sal,s_ad}=req.body;
    var sql="insert into staff(s_id,s_name,s_age,s_sex,s_tel,s_pos,s_sal,s_ad) values('"
        + s_id + "','" +s_name+"','"+s_age+"','"+s_sex+"','"+s_tel+"','"+s_pos+"',"+s_sal +",'" +s_ad + "') ";

    db.query(sql, function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/staff');
        }
    })
});

router.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    db.query("delete from staff where s_id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/staff')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    var sql="select * from staff where s_id=" + id;
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("update_sta", {datas: rows});       //直接跳转
        }
    });
});
router.post('/update_sta', function (req, res) {
    console.log("hello")
    // var proid = req.body.proid;
    // var proforms = req.body.proforms;
    // var proname = req.body.proname;
    // var propri = req.body.propri;
    // var pronum = req.body.pronum;
    // var proaddr = req.body.proaddr;
    var {s_id,s_name,s_age,s_sex,s_tel,s_pos,s_sal,s_ad}=req.body;
    // var sql="update product set proid='"+proid+"',proforms='" + proforms + "',proname= '"
    //     + proname +"',propri= " + propri +",pronum= " + pronum +",proaddr= '" + proaddr + "'";
    var sql="update staff set s_name='" + s_name + "',s_age= '" + s_age
        +"',s_sex= '" + s_sex+"',s_tel= '" + s_tel+"',s_pos= '" + s_pos+"',s_sal= " + s_sal +",s_ad= '" + s_ad + "' where s_id='" + s_id+"'";
    db.query(sql, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/staff');
        }
    });
});
module.exports = router;
