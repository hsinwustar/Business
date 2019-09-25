var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var qs=require('querystring');
var url=require('url');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('purchase',{ title: 'Express' });
// });

/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    db.query('select * from purchase', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('purchase', {title: '采购管理', datas: []});
        } else {

            res.render('purchase', {title: '采购管理', datas: rows});
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
    var pu_id = req.body.pu_id;
    var pu_date = req.body.pu_date;
    var pu_price = req.body.pu_price;
    var pu_number = req.body.pu_number;
    var s_id = req.body.s_id;
    var pr_id = req.body.pr_id;
    var b_id = req.body.b_id;
    db.query("insert into purchase(pu_id,pu_date,pu_price,pu_number,s_id,pr_id,b_id) values('" + pu_id + "','" + pu_date + "','"+ pu_price + "','" + pu_number + "','" + s_id + "','" + pr_id + "','"  + b_id +  "')", function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/purchase');
        }
    })
});

/**
 * 删
 */
router.get('/pu_del/:pu_id', function (req, res) {
    var pu_id = req.params.pu_id;
    db.query("delete from purchase where pu_id=" + pu_id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/purchase')
        }
    });
});
/**
 * 修改
 */
router.get('/toUpdate/:pu_id', function (req, res) {
    var pu_id = req.params.pu_id;
    console.log(pu_id);
    db.query("select * from purchase where pu_id=" + pu_id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("pu_update", {datas: rows});       //直接跳转
        }
    });
});
router.post('/pu_update', function (req, res) {
    var pu_id = req.body.pu_id;
    var pu_date = req.body.pu_date;
    var pu_price = req.body.pu_price;
    var pu_number = req.body.pu_number;
    var s_id = req.body.s_id;
    var pr_id = req.body.pr_id;
    var b_id = req.body.b_id;
    db.query("update purchase set pu_id='"+pu_id+"', pu_date='" + pu_date + "',pu_price='"+pu_price+"', pu_number= '" + pu_number + "',s_id='"+s_id+"',pr_id='"+pr_id+"',b_id='"+b_id+"' where pu_id=" + pu_id, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/purchase');
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
        case "pu_id":
            var sql="select *from purchase where pu_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "pu_date":
            var sql="select *from purchase where pu_date like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "pu_price":
            var sql="select *from purchase where pu_price like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "pu_number":
            var sql="select *from purchase where pu_number like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "s_id":
            var sql="select *from purchase where s_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "pr_id":
            var sql="select *from purchase where pr_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
        case "b_id":
            var sql="select *from purchase where b_id like '%"+inputs + "%'";
            db.query(sql,function (err, rows) {
                if(err){
                    res.end("查询失败：",err)
                }else{
                    res.render("purchase",{title:'商品管理',datas:rows});
                }
            })
            break;
    }

    // var pu_id = req.body.pu_id;
    // var pu_date = req.body.pu_date;
    // var pu_price = req.body.pu_price;
    // var pu_number = req.body.pu_number;
    // var s_id = req.body.s_id;
    // var pr_id = req.body.pr_id;
    // var b_id = req.body.b_id;
    //
    // var sql = "select * from purchase";
    //
    // if (pu_id) {
    //     sql += " and pu_id like '%" + pu_id + "%' ";
    // }
    // if (pu_date) {
    //
    //     sql += " and pu_date=" + pu_date + " ";
    // }
    // if (pu_price) {
    //     sql += " and pu_price=" + pu_price + " ";
    // }
    // if (pu_number) {
    //     sql += " and pu_number=" + pu_number + " ";
    // }
    // if (s_id) {
    //     sql += " and s_id=" + s_id + " ";
    // }
    // if (pr_id) {
    //     sql += " and pr_id=" + pr_id + " ";
    // }
    // if (b_id) {
    //     sql += " and b_id=" + b_id + " ";
    // }
    // sql = sql.replace("and","where");
    // db.query(sql, function (err, rows) {
    //     if (err) {
    //         res.end("查询失败：", err)
    //     } else {
    //         res.render("purchase", {title: '人员管理', datas: rows, pu_id:pu_id, pu_date:pu_date,pu_price:pu_price,pu_number:pu_number,s_id:s_id,pr_id:pr_id,b_id:b_id});
    //     }
    // });
});


module.exports = router;