var evalbars = {
	doms:{
		bar:null,
		contents:null,
		bars:[],
		li:$("<li class='ellipsis' />"),
		barLen:0,
		barLenList:[],
		width:$(window).width()
	},
	init:function(bars){
		console.log("init")
		evalbars.doms.bar = $(".eval-titlebars .bars");
		evalbars.doms.bars = bars;
		evalbars.doms.bars.forEach(function(item){
			var li = evalbars.doms.li.clone();
			li.text(item);
			evalbars.doms.bar.append(li);
			var width = li.outerWidth()>100?100:li.outerWidth()+2;
			evalbars.doms.barLen += width;
			evalbars.doms.barLenList.push(width);
		})
		evalbars.doms.bar.width(evalbars.doms.barLen);
		var tapx = 0;
		evalbars.doms.bar.on("touchstart",function(e){
			tapx = e.originalEvent.changedTouches[0].clientX;
		}).on("touchmove",function(e){
			var cx = e.originalEvent.changedTouches[0].clientX;
			var l = parseInt(evalbars.doms.bar.css("margin-left"));
			l = -(l+tapx-cx);
			if(l>0 && l<evalbars.doms.barLen){
				evalbars.doms.bar.css({
					"marginLeft":l
				})
			}
		}).on("touchend",function(){
			tapx = 0;
		})
	},
	changeTo:function(index){
		var l = 0;
		for(var i = 0;i<index;i++){
			l+=evalbars.doms.barLenList[i];
		}
		evalbars.doms.bar.animate({"marginLeft":-l+20},100,function(){
			$(this).children().css({
				"backgroundColor":"#0062CC"
			}).eq(index).css({
				"backgroundColor":"#0B01DB"
			});
		});
		
	}
}
	
