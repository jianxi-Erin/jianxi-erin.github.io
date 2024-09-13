console.log("js链接成功=>Login.js")
var num=180;
var user=document.getElementById("user")
var password=document.getElementById("password")
var login=document.getElementById("login")
var register=document.getElementById("register")

//登录
login.onclick=function(){
    console.log("登录")
    console.log("用户名:"+user.value)
    console.log("密码:"+password.value)
    
}
//打开注册按钮
register.onclick=function(){
        window.open("Register.html")
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