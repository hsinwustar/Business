// var db = require("./db.js");
// function selet_change() {
//     var objS = document.getElementById("dd");
//     var get_map = objS.options[objS.selectedIndex].value;
//     var sql = "select * from product";
//
// }

function main(){
    var oli=document.getElementsByTagName('li');
    for(var i=0;i<oli.length;i++)
    {

        oli[i].index=i;
        oli[i].onclick=function (){
            if(this.index==0){
                alert("111111111111111");
            }
            if(this.index==1)window.location.href="purchase";
            if(this.index==2)window.location.href="sell";
            if(this.index==3)window.location.href="product";
            if(this.index==4)window.location.href="staff";
            if(this.index==5)window.location.href="staff";
            if(this.index==6)window.location.href="staff";
            if(this.index==7)window.location.href="staff";
            if(this.index==8)window.location.href="staff";
        };
    }
}