const mysql = require("mysql");
const db_config={
    host: 'localhost',
    user: 'root',
    password: '11022011',
    database: 'test'
}

const connect=mysql.createConnection(db_config);
connect.connect(function (err) {
    if(err)
        console.log('mysql连接失败：${err}');
    else
        console.log("mysql连接成功");
});
connect.query("select * from user",function (err,rows) {
    console.log(rows);
})

module.exports=connect;0