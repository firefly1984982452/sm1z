window.evalSelector = function(){
	this.box = null;
	this.onLeft = null;
	this.onRight = null;
	this.onMove = null;
	var eWidth = 0;
	var eHeight = 0;
	var proItem = [];
	var proIndex = -1;
	var isPro = false;
	var item = 0;
	var titleLi = null; 
	var proAllLen = 0;
	var isLeft = false;
	var tMleft = 0;
	var proSpan = null;
	var proBox = null;
	this.init=function(){
		this.box = mui("#eval_content");
		this.box.on("swipeleft","#eval_content_item",this.onLeft);
		this.box.on("swiperight","#eval_content_item",this.onRight);
		this.box.on("drag","#eval_content_item",this.onMove);
		proIndex = 0;
		proNextIndex = 0;
		eWidth = $(window).width();
		eHeight = $(window).height();
		console.log(eHeight+"<-->"+eWidth);
		titleLi = $("#eval_title_item>li");
		item = titleLi.length;
		if(item<=4){
			$("#eval_title_item>li").css("width",100/item+"%");
		}
		$("#eval_title_item>li").each(function(n){
			proItem[n] = $(this).outerWidth();
			proAllLen +=proItem[n];
			item = n;
			console.log(proItem[n]+":"+item)
		});
		$("#eval_title_item").css("width",proAllLen)
		proSpan = $("#eval_progress>span");
		proBox = $("#eval_title_item");
		proBox.css("width",proAllLen);
	}
	this.onMove = function(e){
//		var ref = e.detail.deltaX/eWidth;
//		console.log(ref);
//		$("#eval_progress>span").css({"width":100+100*ref})
	}
	this.onLeft = function(e){
		isLeft = true;
		
		if(proIndex < item){
			proIndex ++;
		}
		changePro();
		e.stopPropagation();
	}
	this.onRight = function(e){
		isLeft = false;
		if(proIndex > 0){
			proIndex --;
		}
		changePro();
		e.stopPropagation();
	}
	function changePro(){
		var left = 0;
		for(var i = 0;i<proIndex;i++){
			left += proItem[i];
		}
		proSpan.animate({"left":left,width:proItem[proIndex]},200);	
		if(left+parseInt(proSpan.css("width"))>eWidth){
			if(isLeft){
				$("#eval_title").css("margin-left",-proItem[--proIndex]);
			}else{
				$("#eval_title").css("margin-left",-proItem[++proIndex]);
			}
			
		}
	}
}
