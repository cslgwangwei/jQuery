$(function(){
	slide();
	
});


function slide(){
	//滚动广告
	var len=$(".num > li").length;

	var index = 0;  //图片序号
	var adTimer;
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);  //获取鼠标悬浮li的index
		showImg(index);

	});

	function showImg(index){
		var adHeight = $(".slider li span").height();
	

		$(".slider").stop(true,false).animate({"marginTop": -adHeight * index +"px"},1000);
		$(".num li").removeClass("on").eq(index).addClass("on"); 
	}
	//滑入停止动画，滑出开始动画
	$(".scrollPics").hover(function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if(index==len){  //最后一张照片之后，转到第一张
				index=0;
				

			}
			

		},2000);
	},function(){
		clearInterval(adTimer);
	});

}