console.log("js链接成功>=Register.js")
var num=180;
var cancel=document.getElementById("cancel")
var finish=document.getElementById("finish")

//登录
cancel.onclick=function(){
    console.log("取消注册")
    window.open("Login.html")
}
//打开注册按钮
finish.onclick=function(){
    console.log("注册")
    alert("注册成功,已为您自动登录\n欢迎!")
    window.open("index.html")
}

//定时器 动态背景图
setInterval(function () {
    if(num<360){

        num+=2.5
    }else{
        num=0;
    }
    document.body.style.backgroundImage="linear-gradient("+num+"deg"+", #a18cd1, #f9e0fa)"
},100)