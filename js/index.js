$(function(){
//	收起音乐播放器
	$(".DemoMusicBot-left").click(function(){
		var ClassName=$(".DemoMusic-bot").attr("class");
//		当前是展开状态的时候做两件事,切换图片和缩短宽度
		if(ClassName.indexOf("zhankai")>-1){
			$(".DemoMusicBot-left").children("img").attr("src","img/35.png");
			$(".DemoMusic-bot").animate({width:'105px'},1000);
			$(".DemoMusic-bot").removeClass("zhankai");
			$(".DemoMusic-bot").addClass("shousuo");
		}
//		当前是收缩状态的时候做两件事,切换图片和恢复宽度
		if(ClassName.indexOf("shousuo")>-1){
			$(".DemoMusicBot-left").children("img").attr("src","img/133130.png");
			$(".DemoMusic-bot").animate({width:'100%'},1000);
			$(".DemoMusic-bot").removeClass("shousuo");
			$(".DemoMusic-bot").addClass("zhankai");
		}
	});
//	开始播放
	$(".StartMenu").click(function(){
		var ClassName=$(this).attr("class");
		var audio = document.getElementById('music1'); 
		if(ClassName.indexOf("start")>-1){//暂停
			$(this).children("img").attr("src","img/911.png");
			$(this).removeClass("start");
			$(this).addClass("end");
			$(".DemoMusicBot-right").children("img").removeClass("xuanzhuan");
			audio.pause();// 这个就是暂停
			var txt=$(".Soun-left").text();
			console.log("打印暂停时的时间",time_to_sec(txt));
			$(".Soun-left").addClass("hide");
			$(".Soun-left2").removeClass("hide");
			var time=$(".Soun-left").text();
			$(".Soun-left2").text(time);
		}
		if(ClassName.indexOf("end")>-1){//开始
			$(this).children("img").attr("src","img/929.png");
			$(this).removeClass("end");
			$(this).addClass("start");
			$(".DemoMusicBot-right").children("img").addClass("xuanzhuan");
			audio.play();// 这个就是播放  
			$(".Soun-left").removeClass("hide");
			$(".Soun-left2").addClass("hide");
			audio.addEventListener("timeupdate",function(){//获取实时播放秒数
		    console.log("秒数000",this.currentTime);
		    var TimeNum= Math.floor(this.currentTime);//向下取整
		    var LegTime=$(".HiddenDiv").val();//音频总时长
			var TimeNum2=TimeNum/LegTime;
			var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
			var DataTime=TimeNumTwo*100+"%";
			console.log("获取当前进度条百分百",DataTime);
			$(".Soun-left").text(s_to_hs(TimeNum));//设置动态播放时间
			var TopSize="100%";
			var GroundSize=DataTime+" "+TopSize;
			var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
			$("#DemoYinliang").css("background",GroundColor);
			$("#DemoYinliang").css("background-size",GroundSize);
			});
		}
	});
//	重新播放音乐
	$(".MusicSoun-right").click(function(){
		var audio = document.getElementById('music1'); 
 		audio.currentTime = 0;
	})
//	上一首
	$(".FiratMenu").click(function(){
		$("#music1").attr("src","mp3/Parallel World.mp3");
		var audio = document.getElementById('music1'); 
		audio.play();
//		判断显示动态时间的DIV是否被隐藏
		var className=$(".Soun-left").attr("class");
		if(className.indexOf("hide")>-1){
			$(".Soun-left").removeClass("hide");
			$(".Soun-left2").addClass("hide");
		}
	//	获取音频时长
		SounMusicTime();
//		更改歌曲名称
		$(".MusicSoun-top").text("1.第一首歌");
//		替换暂停图片
		$(".StartMenu").children("img").attr("src","img/929.png");
		$(".StartMenu").removeClass("end");
		$(".StartMenu").addClass("start");
		$(".DemoMusicBot-right").children("img").addClass("xuanzhuan");
//		获取实时播放秒数
		audio.addEventListener("timeupdate",function(){
	    console.log("秒数000",this.currentTime);
	    var TimeNum= Math.floor(this.currentTime);//向下取整
	    var LegTime=$(".HiddenDiv").val();//音频总时长
		var TimeNum2=TimeNum/LegTime;
		var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
		var DataTime=TimeNumTwo*100+"%";
		console.log("获取当前进度条百分百",DataTime);
		$(".Soun-left").text(s_to_hs(TimeNum));//设置动态播放时间
		var TopSize="100%";
		var GroundSize=DataTime+" "+TopSize;
		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
		$("#DemoYinliang").css("background",GroundColor);
		$("#DemoYinliang").css("background-size",GroundSize);
		});
	});
//	下一首
	$(".EndingMenu").click(function(){
		$("#music1").attr("src","mp3/北极光.mp3");
		var audio = document.getElementById('music1'); 
		audio.play();
//		判断显示动态时间的DIV是否被隐藏
		var className=$(".Soun-left").attr("class");
		if(className.indexOf("hide")>-1){
			$(".Soun-left").removeClass("hide");
			$(".Soun-left2").addClass("hide");
		}
	//	获取音频时长
		SounMusicTime();
	//	更改歌曲名称
		$(".MusicSoun-top").text("3.最后一首歌");
		//		替换暂停图片
		$(".StartMenu").children("img").attr("src","img/929.png");
		$(".StartMenu").removeClass("end");
		$(".StartMenu").addClass("start");
		$(".DemoMusicBot-right").children("img").addClass("xuanzhuan");
//		获取实时播放秒数
		audio.addEventListener("timeupdate",function(){
	    console.log("秒数000",this.currentTime);
	    var TimeNum= Math.floor(this.currentTime);//向下取整
	    var LegTime=$(".HiddenDiv").val();//音频总时长
		var TimeNum2=TimeNum/LegTime;
		var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
		var DataTime=TimeNumTwo*100+"%";
		console.log("获取当前进度条百分百",DataTime);
		$(".Soun-left").text(s_to_hs(TimeNum));//设置动态播放时间
		var TopSize="100%";
		var GroundSize=DataTime+" "+TopSize;
		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
		$("#DemoYinliang").css("background",GroundColor);
		$("#DemoYinliang").css("background-size",GroundSize);
		});
	});
//	拖动控制音量
	$("#yinliang").change(function(){
		var val=$(this).val();
		var Data=[10,20,30,40,50,60,70,80,90,100];
		var DatasVal=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
		if(val<10){
			document.getElementById("music1").volume = 0.1;
		}
		if(val>90){
			document.getElementById("music1").volume = 1;
		}
		for(var k=0;k<Data.length;k++){
			if(val>=Data[k]&&val<=Data[k+1]&&val<=90){
				document.getElementById("music1").volume = DatasVal[k];
			}	
		}
//		获取当前值和max长度100的比例,设置css样式
		var LeftCss=val/100;
		var Cssleft=LeftCss*100+'%';
		var TopSize="100%";
		var GroundSize=Cssleft+" "+TopSize;
		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
		$("#yinliang").css("background",GroundColor);
		$("#yinliang").css("background-size",GroundSize);
	});
//	js设置静音
	$(".OpenSound").click(function(){
		$("#yinliang").css("background","#ddd");
		$("#yinliang").css("background-size",0);
		document.getElementById("music1").volume = 0;
	});
//	js设置最大音量
	$(".CloseSound").click(function(){
		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
		$("#yinliang").css("background",GroundColor);
		$("#yinliang").css("background-size","100%");
		document.getElementById("music1").volume = 1;
	});
//	拖动控制音频进度
	$("#DemoYinliang").change(function(){
		$(".StartMenu").children("img").attr("src","img/929.png");
		$(".StartMenu").removeClass("end");
		$(".StartMenu").addClass("start");
		$(".DemoMusicBot-right").children("img").addClass("xuanzhuan");
		var val=$(this).val();//当前的进度
		var x = document.getElementById("music1");
		x.play();//播放音乐
//		设置音频进度
		x.currentTime=val;
//		拿到实时播放的秒数,转换分秒,展示,并且加载进度条动画
		x.addEventListener("timeupdate",function(){
	    console.log("秒数000",this.currentTime);
	    var TimeNum= Math.floor(this.currentTime);//向下取整,this.currentTime指的是实时的秒数
	    var LegTime=$(".HiddenDiv").val();//音频总时长
		var TimeNum2=TimeNum/LegTime;
		var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
		var DataTime=TimeNumTwo*100+"%";
		console.log("获取当前进度条百分百",DataTime);
		$(".Soun-left").text(s_to_hs(TimeNum));//设置动态播放时间
		var TopSize="100%";
		var GroundSize=DataTime+" "+TopSize;
		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
		$("#DemoYinliang").css("background",GroundColor);
		$("#DemoYinliang").css("background-size",GroundSize);
		});
	});
//	获取音频时长
	SounMusicTime();  
//	点击试听
	$(".FontDivHover").click(function(){
		$(this).addClass("RedColor").siblings().removeClass("RedColor");
		var UrlHref=$(this).children(".MusicUrl").children("input").val();
//		判断显示动态时间的DIV是否被隐藏
		var className=$(".Soun-left").attr("class");
		if(className.indexOf("hide")>-1){
			$(".Soun-left").removeClass("hide");
			$(".Soun-left2").addClass("hide");
		}
//		设置新的音频路径
		$("#music1").attr("src",UrlHref);
		var audio = document.getElementById('music1'); 
		audio.play();// 这个就是播放  
//		设置歌曲名字
		var MusicName=$(this).children(".MusicNmae").text();
		$(".MusicSoun-top").text(MusicName);
		var AuditionsName=$(this).children(".Auditions").attr("class");
		if(AuditionsName.indexOf("gray")>-1){//当前是灰色图片
			$(this).children(".Auditions").children("img").attr("src","img/mp.gif");
			$(this).siblings().children(".Auditions").children("img").attr("src","img/mp1.png");
			SounMusicTime();//音频时长
			$(".StartMenu").children("img").attr("src","img/929.png");
			$(".StartMenu").removeClass("end");
			$(".StartMenu").addClass("start");
			$(".DemoMusicBot-right").children("img").addClass("xuanzhuan");
//			拿到实时播放的秒数,转换分秒,展示,并且加载进度条动画
			audio.addEventListener("timeupdate",function(){
		    console.log("秒数000",this.currentTime);
		    var TimeNum= Math.floor(this.currentTime);//向下取整,this.currentTime指的是实时的秒数
		    var LegTime=$(".HiddenDiv").val();//音频总时长
			var TimeNum2=TimeNum/LegTime;
			var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
			var DataTime=TimeNumTwo*100+"%";
			console.log("获取当前进度条百分百",DataTime);
			$(".Soun-left").text(s_to_hs(TimeNum));//设置动态播放时间
			var TopSize="100%";
			var GroundSize=DataTime+" "+TopSize;
			var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
			$("#DemoYinliang").css("background",GroundColor);
			$("#DemoYinliang").css("background-size",GroundSize);
			});
		}
	});	
});
//	转换秒为分钟
function s_to_hs(s){
    //计算分钟
    //算法：将秒数除以60，然后下舍入，既得到分钟数
    var h;
    h  =   Math.floor(s/60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    s  =   s%60;
    //将变量转换为字符串
    h    +=    '';
    s    +=    '';
    //如果只有一位数，前面增加一个0
    h  =   (h.length==1)?'0'+h:h;
    s  =   (s.length==1)?'0'+s:s;
    return h+':'+s;
}
//获取音频时长
function SounMusicTime() {
	setTimeout(function () {
	var duration = document.getElementById("music1").duration;
	if(isNaN(duration)){
		SounMusicTime();
	}
	else{
		var Val=s_to_hs(duration).substring(0,5);//截取字符串，保留整数位
		$(".Soun-right").text(Val);
//		设置max
		var MaxTime= Math.floor(duration);//向下取整
		$("#DemoYinliang").attr("max",MaxTime);
		$(".HiddenDiv").val(MaxTime);//隐藏域赋值
	}
	}, 10);
}
//	定时器设置音频时间,唉,一段废代码，不舍得删除
//function SetTime(time){
//	SounMusicTime();
//	var DurationTime2=$(".HiddenDiv").val();
//	var num = time;  
//  var ttt = setInterval(function(){  
//      num++;  
//      $(".Soun-left").text(s_to_hs(num));//显示动态播放时间
//	//  进度条动态加载
//		var TimeNum2=num/DurationTime2;
//		var TimeNumTwo=TimeNum2.toFixed(2);//小数保留两位数
//		var DataTime=TimeNumTwo*100+"%";
//		var TopSize="100%";
//		var GroundSize=DataTime+" "+TopSize;
//		var GroundColor="-webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd";
//		var className=$(".Soun-left").attr("class");
//		if(className.indexOf("hide")>-1){
//          clearInterval(ttt);  
//		}else{
//			$("#DemoYinliang").css("background",GroundColor);
//			$("#DemoYinliang").css("background-size",GroundSize);
//		}
//      if(num==DurationTime2){  
//          clearInterval(ttt);  
//      }         
//  },1000);
//}
//将分秒转换为秒
function time_to_sec (time) {
    var s = '';
    var min = time.split(':')[0];
    var sec = time.split(':')[1];
    s = Number(min*60) + Number(sec);
    return s;
};