//!(function(){
	var app = {
			vm:null,
			datas:{
				endTiem:[],
				tg:{
					times:[
						[],
						[]
					]
				},
				searhParams:{
					type:0
				},
				changeIndex:0,//记录当前导航位置
				vms:{
					vmClassfly:null,
					vmIndex:null,
				},
				datas:{
					classfly:{
						list_1:[],
						list_2:[],
						list_3:[]
					},
					index:{
						activity_lst:[],
						recommend:[],
						groupbuy:[],
						newarrival:[],
						explosionModel:[]
					}
				}
			},
			methods:{
				indexTaps:function(e){
					var self = this;
					index = self.getAttribute("data-index");
					var newPage  = "pages/page_"+index+".html";
					mui.openWindow(newPage,newPage,{
						creatNew:false
					})
				},
				barTaps:function(){
					var self = this;
					index = self.getAttribute("data-index");
					app.datas.changeIndex = index;
					app.methods.changeIndexBar(index);
				},
				changeIndexBar:function(index){
					var items = $(".mui-tab-item").css("color","#929292");
					var contents = mui(".mui-control-content");
					items.each(function(item){
						var itemImgs = $(this).find("img");
						itemImgs.eq(1).hide();
						itemImgs.eq(0).show();
						$(contents[item]).removeClass("mui-active");
					})
					var imgs = items.eq(index).find("img");
					items.eq(index).css("color","#e00b1f");
					$(contents[index]).addClass("mui-active");
					if(index==0){
						$("header").css({"top":0})
						$(".mui-content").css({"padding-top":44})
					}else{
						$("header").animate({"top":-44},100)
						$(".mui-content").animate({"padding-top":0},50)
					}
					imgs.eq(0).hide();
					imgs.eq(1).show();
				},
				changeTimer:function(){
					for(var i =0;i<app.datas.endTiem.length;i++){
						app.bindNum("#clock-"+i,app.endTimeFormart(app.datas.endTiem[i]));
					}
					setTimeout(function(){
						app.methods.changeTimer();
					},1000);
				},
				checkboxTaps:function(e){
					var that = e;
					var input_ = this.querySelector("input[type=checkbox]");
					if(that.target.className.indexOf("checkbox")<0){
						var comment = $(this).find("input[type=checkbox]")[0];
						if (document.all) {
							comment.click();
						} else if (document.createEvent) {
							var ev = document.createEvent('MouseEvents');
						 	ev.initEvent('click', false, true);
							comment.dispatchEvent(ev);//
							that.preventDefault();
							that.stopPropagation();
						}
					}
					var rel = input_.getAttribute("name");
					var items = document.querySelectorAll("input[name='"+rel+"']");
					for(var i=0;i<items.length;i++){//foreach除异常不能结束或者是跳出,map some 不支持节点数组
						var item = items[i];
						if(!item.checked){
							document.querySelector("input[data-rel='"+rel+"']").checked = false;
							return;
						}
					}
					document.querySelector("input[data-rel='"+rel+"']").checked = true;
				},
				checkboxSelect:function(e){
					var that = this;
					if(e.target.nodeName!='INPUT'){
						var input_ = that.querySelector("input[type='checkbox']");
						var rel = input_.getAttribute("data-rel");
						var ck = !input_.checked;
						var items = document.querySelectorAll("input[name='"+rel+"']");
						for(var i = 0;i < items.length;i++){
							items[i].checked = ck;
						}
					}else{
						e.target.checked=!e.target.checked;
					}
				},
				searchTaps:function(e){
					var self = e.target;
					var clazz = self.getAttribute("class");
					switch(clazz){
						case "sel-text":{
							var item = $(self).parent().find(".sel-item");
							var disp = item[0].getAttribute("data-show");
							if(disp!="1"){
								var lis = item.find(".item");
								item.animate({"height":lis.height()*lis.length},100);
								item[0].setAttribute("data-show",1);
							}else{
								item.animate({"height":0},100);
								item[0].setAttribute("data-show",0);
							}
							
						};break;
						case "item":{
							var txt  = self.innerText;
							$(".sel-text").text(txt);
							if(txt=="商品"){
								app.datas.searhParams.type=0;
							}else if(txt=="店铺"){
								app.datas.searhParams.type=1;
							}else{
								app.datas.searhParams.type=2;
							}
						};break;
						case 'search-btn':{
							alert(app.datas.searhParams.type);
						};break;
						case "keysearch":{
							$(self).focus();
						};break;
						default:break;
					}
				},
				search:function(){
					console.log("搜索")
				},
				changeWindow:function(url){
					mui.openWindow({
						url:url,
						id:url
					});
				},
				claassHide:function(flag){
					var wd = $(window).width()-$(".class-left").width();
					if(flag==true){
						wd=0;
					}
					$(".item-box").animate({"left":-wd},100);
				},
				changeLeft:function(left){
					if(left==true){
						app.datas.changeIndex+=1;
						if(app.datas.changeIndex>3){
							app.datas.changeIndex=0;
						}
					}else{
						app.datas.changeIndex-=1;
						if(app.datas.changeIndex<0){
							app.datas.changeIndex=3;
						}
					}
					app.methods.changeIndexBar(app.datas.changeIndex)
				},
				bindSwipe:function(){
					mui("html").on("swipeleft","body",function(e){
						if(e.target.nodeName!="IMG"){
							app.methods.changeLeft(true);
							e.stopPropagation();
						}
					}).on("swiperight","body",function(e){
						if(e.target.nodeName!="IMG"){
							app.methods.changeLeft(false);
							e.stopPropagation();
						}
					})
				},
				unBindSwipe:function(){
					mui("html").off("swipeleft","body").off("swiperight","body");
				},
				diaLog:{
					show:function(isShow){
						var show = isShow=="show"?"show":"hide";
						mui("#popover").popover(show);
					},
					handler:function(e){
						console.log("hide")
						e.stopPropagation();
					}
				},
				TXlistener:{
					back:null,
					listner:function(){
						
					}
				},
				endSearchAnim:function(e){
					var obj = $(".sel-item");
					if(e && e.className!="sel-txt"&&obj.height()!=0){
						obj.animate({"height":0},200);
					}
				},
				_HTTP:{
					classfly:{
						timeOutNum:0,
						Model:Xeval.Mode.HTTP_MAIL_GET_CLASS1,
						get:function(params){
							if(typeof params!='object'){
								params = {}
							}
							var self = this;
							Xeval.Http(self.Model,params,self.back);
						},
						back:function(isOk,data){
							//app.methods.diaLog.show("hide");
							console.log(JSON.stringify(data))
							var self = app.methods._HTTP.classfly;
							
							console.log(self.Model)
							if(isOk){
								if(self.Model == Xeval.Mode.HTTP_MAIL_GET_CLASS1){
									app.datas.datas.classfly.list_1 = data;
									self.Model = Xeval.Mode.HTTP_MAIL_GET_CLASS2_BYID;
									self.get({parent:data[0].code});
								}else if(self.Model == Xeval.Mode.HTTP_MAIL_GET_CLASS2_BYID){
									app.datas.datas.classfly.list_2 = data;
									self.Model = Xeval.Mode.HTTP_MAIL_GET_CLASS3_BYID;
									self.get({parent:data[0].code});
								}else{
									app.datas.datas.classfly.list_3 = data;
								}
							}else{
								setTimeout(function(){
									self.timeOutNum++;
									if(self.timeOutNum>5){
										mui.alert("网络错误,请检查您的网络");
										mui.back();
									}else{
										console.log("classfly重连网络:"+self.timeOutNum+"次")
										self.get();
									}
								},2000)
							}
						},
						tap_1:function(e){
							//app.methods.diaLog.show("show");
							var self = app.methods._HTTP.classfly;
							var id = this.getAttribute("data-id");
							self.Model = Xeval.Mode.HTTP_MAIL_GET_CLASS2_BYID;
							self.get({parent:id});
							app.methods.claassHide(true)
						},
						tap_2:function(e){
							//app.methods.diaLog.show("show");
							var self = app.methods._HTTP.classfly;
							var id = this.getAttribute("data-id");
							self.Model = Xeval.Mode.HTTP_MAIL_GET_CLASS3_BYID;
							self.get({parent:id});
							app.methods.claassHide(true)
						}
					},
					index:{
						timeOutNum:0,
						Model:Xeval.Mode.HTTP_MAIL_GET_INDEXLIST,
						get:function(params){
							app.methods.diaLog.show("show");
							var self = this;
							if(typeof params!='object'){
								params = {}
							}
							Xeval.Http(self.Model,params,self.back);
						},
						back:function(isOk,data){
							app.methods.diaLog.show("hide");
							var self = app.methods._HTTP.classfly;
							if(isOk){
								app.datas.vms.vmIndex.$data = data;
								for(var i = 0;i<data.groupbuy.length;i++){
									app.datas.endTiem.push(data.groupbuy[i].EndTime);
								}
								app.methods.changeTimer();
							}else{
								setTimeout(function(){
									self.timeOutNum++;
									if(self.timeOutNum>5){
										mui.alert("网络错误,请检查您的网络");
										mui.back();
									}else{
										console.log("index重连网络:%s次",self.timeOutNum)
										self.get();
									}
								},2000)
							}
						}
					}
				},
				filters:{
					icon:function(val){
						var self = this;
//						console.log(this)
						if(val && val.trim()!=""){
//							var img = document.createElement("img");
							var src_ = Xeval.UrlModel.TEST +val;
//							img.src = src_;
//							if (img.complete) {
//						      imgOnload(self,src_);
//						    } else {
//						        img.onload = function () {
//						            img.onload = null;
//						        	return src_;
//						        };
//						    };
						    return src_;
						}else{
							return "../images/img_loading.jpg";
						}
					},
					clockId:function(index){
						return "clock-"+index;
					},
					imgOnload:function(e,index,url){
						
					}
				},
				goods:function(id){
					mui.openWindow("pages/goods_class.html#"+id,"pages/goods_class.html");
				}
			},
			endTimeFormart:function(endTime){
				var now = new Date();
				var b = endTime.toString().replace(/[^0-9]+/ig,"");
				var endDate = new Date(parseInt(b)); 
				var leftTime=endDate.getTime()-now.getTime();
				var leftsecond = parseInt(leftTime/1000); 
				var day1=Math.floor(leftsecond/(60*60*24)); 
				var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
				var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
				var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
				return [day1,hour,minute,second];
			},
			bindNum:function(id,times){
				var nums = $(id).find(".num");
				var times = times;
				var day = times[0];
				times.splice(0,1);
				$(id).find(".timer-day").text(day);
				times.forEach(function(item,n){
					if(typeof(item)=="number"||typeof(item)=="string"){
						var arr = item.toString().split("");
						if(arr.length==1){
							$(nums[2*n+1]).text(arr[0]);
							$(nums[2*n]).text(0);
						}else{
							$(nums[2*n+1]).text(arr[1]);
							$(nums[2*n]).text(arr[0]);
						}
					}else{
						return;
					}
				})
			},
			init:function(){
				//app.methods.bindSwipe();坑太多，不跳了，
				mui("#index-box").on("tap","li",app.methods.indexTaps);//跳转页面
				mui(".mui-bar-tab").on("tap",".mui-tab-item",app.methods.barTaps);//导航切换
				mui(".mui-table-view").on("tap",".car-box",app.methods.checkboxTaps)//购物车选择事件
									  .on("tap",".mui-checkbox",app.methods.checkboxSelect)//店铺选择事件
				mui(".mui-bar").on("tap",".search",app.methods.searchTaps);//主页搜索框的全部tap事件
				mui(".me-header").on("tap",".msg",function(){app.methods.changeWindow('pages/message.html')});
				mui(".class-box").on("tap",".item-box",app.methods.claassHide);
				mui("#class-1").on("tap","a",app.methods._HTTP.classfly.tap_1);//分类一级点击始事件
				mui("#class-2").on("tap","span",app.methods._HTTP.classfly.tap_2);
//				mui("body").on("touchstart",".mui-backdrop",app.methods.diaLog.handler);//泡泡窗口弹出层事件监听
//				app.methods.TXlistener.back = mui.back;
//				mui.back = app.methods.TXlistener.listner;
				$("#classfly").height($(window).height()-50);
				//$(".mui-slider").on("touchstart",app.methods.unBindSwipe).on("touchend",app.methods.bindSwipe);//没卵用,监听图片去了
				$("body").on("touchstart",app.methods.endSearchAnim);
				app.datas.vms.vmClassfly = new Vue({
					el:"#classfly",
					data:app.datas.datas.classfly,
					filters:app.methods.filters
				})
				app.datas.vms.vmIndex = new Vue({
					el:"#index",
					data:app.datas.datas.index,
					methods:app.methods,
					filters:app.methods.filters
				})
				app.methods._HTTP.classfly.get();
				app.methods._HTTP.index.get();
			}
		}
	mui.ready(function(){
		Xeval.setUrl("http://139.224.164.193:8081/");
		app.init();
	})
//})();
