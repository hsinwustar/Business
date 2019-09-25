function main(){
    var oli=document.getElementsByTagName('li');
    for(var i=0;i<oli.length;i++)
    {
        console.log("ahhah")
        oli[i].index=i;
        oli[i].onclick=function (){
            if(this.index==0)window.location.href="purchase";
            if(this.index==1)window.location.href="sell";
            if(this.index==2)window.location.href="supplier";
            if(this.index==3)window.location.href="dealer";
            if(this.index==4)window.location.href="product";
            if(this.index==5)window.location.href="staff";
        };
    }
}