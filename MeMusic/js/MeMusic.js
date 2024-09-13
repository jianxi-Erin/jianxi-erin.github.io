	console.log("链接js成功>=MeMusic")
	//获取id
	var audio=document.getElementById("audio")
	var like=document.getElementById("like")
	var collect=document.getElementById("collect")
    var download=document.getElementById("download")
	var song =document.getElementById("song")
	var singer =document.getElementById("singer")
	var lyric=document.getElementById("lyric")
	var start=document.getElementById("start")
	var previous=document.getElementById("previous")
	var next=document.getElementById("next")
	var musicNow=document.getElementById("musicNow")	
	var playTime=document.getElementById("playTime")
	var progress=document.getElementById("progress")
	var songIndex = ["勇气", "不再联系", "当我唱起这首歌", "至此流年各天涯", "错位时空", "海底", "写给黄淮","泡沫","坚持到底","那个傻瓜","得不到你","会不会（吉他版）"];
    var singerIndex = ["棉子", "程响", "小贱", "李志", "艾辰", "一支榴莲", "邵帅","G.E.M.邓紫棋","阿杜","陈雪凝","隔壁老樊","刘大壮"];
    var num = 0;
    // 当前播放时间
    var time;
    // 当前播放分
    var min;
    //当前播放秒
    var s;
    //总播放时间
    var Ttime;
    // 总播放分
    var Tmin;
    //总播放秒
    var Ts;
    //播放进度信息
    var prg;
    loading();
    //执行初始化事件
    like.onclick = function () {
        console.log("单击喜欢按钮")
        if (like.title == "喜欢") {
            like.src = "img/likeNot.png";
            like.title = "取消喜欢"
        } else {
            like.src = "img/like.png";
            like.title = "喜欢";

        }
    }
    collect.onclick = function () {
        console.log("单击收藏按钮")
        if (collect.title == "收藏") {
            alert("已收藏")
            collect.title = "取消收藏"
        } else {

            alert("取消收藏")
            collect.title = "收藏"
        }
    }
    // 播放/暂停按钮
    start.onclick = function () {
        console.log("单击播放/暂停按钮")
        if (audio.paused) {
            // alert("未播放,开始播放")
            musicPlay();
        } else {
            // alert("已播放,开始暂停");
            musicPause();

        }
    }
    //上一首按钮
    previous.onclick = function () {
        console.log("上一首")
        // alert("上一首");
        if (num != 0) {
            num -= 1;
        } else {
            num = songIndex.length - 1;
        }
        //音乐暂停
        musicPause();
        changerSong();
         //音乐播放
        musicPlay();
    }
    //下一首按钮
    next.onclick = function () {
        // alert("下一首");
        console.log("下一首")
        if (num != songIndex.length - 1) {
            num += 1;
        } else {
            num = 0;
        }
         //音乐暂停
        musicPause();
        changerSong();
         //音乐播放
        musicPlay();

    }
    //音乐暂停
    function musicPause() {
        console.log("音乐暂停")
        audio.pause();
        start.src = "img/startPlay.png"
        start.title = "播放"
        document.title = "ME畅听-感受音乐的魅力"
    }
    //音乐播放
    function musicPlay() {
        console.log("音乐播放")
        audio.play();
        start.src = "img/startPause.png"
        start.title = "暂停"
        document.title += " -正在播放 " + songIndex[num] + "-" + singerIndex[num]
    }
    //切换歌曲函数
    function changerSong() {
        console.log("执行切换歌函数")
        console.log("播放序列为:"+num)
        // 更改audio的路径
        audio.src = "audio/" + songIndex[num] + "-" + singerIndex[num] + ".mp3"
        //更新下载链接
        download.src=audio.src;
        download.download=songIndex[num] + "-" + singerIndex[num] + ".mp3"
        // 更改歌曲名称
        song.innerHTML = songIndex[num];
        song.title = songIndex[num];
        // 更改歌手名
        singer.innerHTML = singerIndex[num];
        singer.title = singerIndex[num]
        //更改歌手头像
        headPicture.src = "img/" + singerIndex[num] + ".jpg";
        headPicture.title = singerIndex[num];
        //切换歌词
        lyric.src = "lrc/" + num + ".txt"
        //切换控制信息显示
        musicNow.innerHTML = songIndex[num] + "-" + singerIndex[num];
        musicNow.title = musicNow.innerHTML;

    }
    //初始化函数
    function loading() {
        num = Math.floor(Math.random() * songIndex.length);
        console.log("初始化随机播放序列" )
        changerSong();
    }
    //计时器
    setInterval(function () {
        //格式化当前播放分
        min = Math.floor(audio.currentTime / 60);
        //格式化当前播放秒,先取整利于计算
        s = Math.floor(audio.currentTime) % 60;
        if (min < 10) {
            min = "0" + min;
        }
        if (s < 10) {
            s = "0" + s;
        } else {
            s = s;
        }

        //格式化总播放分
        Tmin = Math.floor(audio.duration / 60);
        //格式化总播放秒,先取整利于计算
        Ts = Math.floor(audio.duration) % 60;
        if (Tmin < 10) {
            Tmin = "0" + Tmin;
        }
        if (Ts < 10) {
            Ts = "0" + Ts;
        } else {
            Ts = Ts;
        }
        time = min + ":" + s;
        Ttime = Tmin + ":" + Ts;
        prg = (audio.currentTime / audio.duration * 100).toFixed(2);
        //进度信息
        playTime.innerHTML = time + "/" + Ttime + "[" + prg + "%]";
        //更新进度条
        progress.style.width = prg / 100 * 800 + "px";
        if (prg >= 100) {
            next.onclick();
        }
    }, 100)