console.log("js链接成功=>index.js")
var search = document.getElementById("search")
var searchBox = document.getElementById("searchBox")
var leftPrevious = document.getElementById("leftPrevious")
var rightNext = document.getElementById("rightNext")
var mainPic = document.getElementById("mainPic")
var Pic = ["MAIN0.png", "MAIN1.png","MAIN2.png"];
var PicName = ["ME科技-每个人都可以创造奇迹", "ME畅听-感受音乐的魅力","尚合手机-官网"];
var PicHTML = ["index.html", "MeMusic/MeMusic.html","shanghe/shanghe.html"];
var num = 0;
search.onclick = function () {
    console.log("单击搜索按钮")
    if (searchBox.style.width != "300px") {
        searchBox.style.width = "300px"
        searchBox.style.border = "1px solid rgb(0,0,0)"
        
    } else {
        searchBox.style.width = "0px"
        searchBox.style.border = "0"
        alert("搜索内容:" + searchBox.value + "\n暂无搜索结果")
    }
}
leftPrevious.onclick = function () {
    console.log("上一页按钮")
    if (num == 0) {
        num = Pic.length - 1
    } else {
        num--;
    }
    changerPic();
}
rightNext.onclick = function () {
    console.log("下一页按钮")
    if (num == Pic.length - 1) {
        num = 0
    } else {
        num++;
    }
    changerPic();
}
//改变焦点图
console.log("改变焦点图")
function changerPic() {
    mainPic.src = "img/" + Pic[num];
    mainPic.title = PicName[num]
}
//焦点图单击事件
console.log("单击焦点图")
mainPic.onclick=function(){
    window.open(PicHTML[num])
}


//定时更换焦点图
setInterval(function () {
    rightNext.onclick();
}, 8000)
