;(function(){
	var page = {
		init : function(){
			this.del();
			this.rightFont();
			this.moreBtn();
			this.addSignIn();
			this.save();
		},
		
		//"删除"按钮的功能
		del : function(){
			$(".delete").on('tap',function(){
				$(this).parent().remove();
			})
		},
		
		//添加时弹出添加数量/返回
		rightFont : function(){
			var info = "";
			$(".add_num").on('tap',function(e){
				var that = $(this);
//				e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
				var btnArray = ['取消','确定'];
				mui.prompt('数量：', '100', '请输入添加数量', btnArray, function(e) {
					if (e.index == 1) {
						info = '数量为：' + e.value;
						flag = true;
						that.parent().remove()
					} else {
						info = '你点了取消按钮';
					}
				})	
			})
			
			$(".add_back").on('tap',function(){
				mui.back();
			})
		},
		
		//"更多"按钮弹出的添加、删除、修改
		moreBtn : function(){
			var flag = false;
			var showText = function(_text){
				if (flag) {
					$(".mui-pull-right").removeClass('mui-icon-more').addClass('mui-icon-checkmarkempty');				
					$(".mui-title").text(_text);					
				} else{
					$(".mui-pull-right").removeClass('mui-icon-checkmarkempty').addClass('mui-icon-more');				
					$(".mui-title").text('列表');
					$("input[type=checkbox]").hide(300);
				}
			}
			var show = function(){
				$(".sel-item").show(300)
				flag = true;
			}			
			var hide = function(time){
				if (time == null) {
					$(".sel-item").hide(300)
				}else{
					$(".sel-item").hide(time);
				}				
				flag = false;
			}
			hide(0);
			
			//按钮点击之后的隐藏和显示
			$(".mui-pull-right").on('tap',function(){
				if ($(this).attr('class').indexOf('mui-icon-more')>-1) {					
					if (!flag) {
						show();
					} else{
						hide();
					}
				}else if ($(this).attr('class').indexOf('mui-icon-checkmarkempty')>-1) {
					/*"打勾"按钮点击事件*/
					showText();
				}else{
					console.log('待写')
				}
			})
			
			//删除多选框默认隐藏
			$("input[type=checkbox]").hide();
			
			//第2个，第1个是href跳转
			$("#del").on('tap',function(){
				showText('修改状态');
				$("input[type=checkbox]").show(300);
				hide();
				var parent = $(this).parent().parent().parent().parent().attr('class');
				if (parent.indexOf('sys-02-con')>-1) {
					console.log('sys-1')
				}else if(parent.indexOf('pro-01-con')>-1){					
					console.log('2sys');
				}else{
					console.log('未知错误')
				}
			});
			
			//第3个
			$("#update").on('tap',function(){
				showText('修改领班');
				$("input[type=checkbox]").show(300);
				hide();
				var parent = $(this).parent().parent().parent().parent().attr('class');
				if (parent.indexOf('sys-02-con')>-1) {
					/*如果是项目成员列表页*/
					console.log(1)
				}else{
					console.log(2)
				}
			});
		},
		
		//添加补签
		addSignIn : function(){
			var flag = false ;
			$(".add_sign_in").on('tap', function() {
				if (!flag) {
					$("#add_").css('display','block');
					$("#save").css('display','block');
					flag = true;
				} else{
					$("#add_").css('display','none');
					$("#save").css('display','none');
					flag = false;
				}
			});
			
			/*补签里的保存*/
			
				$("#save").on('click',function(){
					var time = $("#add_time").val();
					var address = $("#add_address").val();
					var html = '<li class="mui-table-view-cell mui-media"><label>签到时间：'+time+'</label><label>地址：'+address+'</label></li>';
					$(html).insertBefore($("#add_"));
					$("#add_").css('display','none');
					$("#save").css('display','none');
					flag = false;
				});
		},
		
		save : function(){
			console.log("save");
		}
	}
	page.init();
})();
