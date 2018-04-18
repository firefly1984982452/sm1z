mui.plusReady(function(){
	app.init();
})
var app = {
	datas:{
		meVm:null,
		indexData:{}
	},
	methods:{
		indexTap:function(e){
			var self = this;
			index = self.getAttribute("data-index");
			var newPage  = "pages/page_"+index+".html";
			mui.openWindow({
				url:newPage,
				id:newPage,
				extras:{
					backs:{
						back:false
					}
				}
			})
		},
		INDEX_BAR:function(){
			var strs = ["首页", "设置", "我的", "消息"];
			var index = this.getAttribute("data-index");
			mui(".mui-title")[0].innerHTML = strs[index];
			if(index==2){
				document.getElementById("me-setings").style.display="block";
			}else{
				document.getElementById("me-setings").style.display="none";
			}
		},
		INDEX_SETINGS:function(){
			mui.openWindow({
				url:"xiugai/up_me.html",
				id:"xiugai/up_me.html"
			})
		},
		loginOut:function(){
			var item = JSON.parse(localStorage.getItem("art_user"));
			item.guid = "";
			localStorage.setItem('art_user',JSON.stringify(item));
			mui.back()
		}
	},
	init:function(){
		app.datas.indexData = app.utils.getMsg();
		mui("#index-box").on("tap","li",app.methods.indexTap);
		console.log(JSON.stringify(app.datas.indexData));
		if(app.datas.meVm){
			app.datas.meVm.$data = app.datas.indexData;
		}
		app.datas.meVm = new Vue({
			el:"#me",
			data:app.datas.indexData,
			methods:app.methods,
			filters:{
				birth:function(val){
					if(typeof(val)=="string"&&val.indexOf(".")>0){
						var vals = val.split(".");
						return vals[0]+"年"+vals[1]+"月"
					}else{
						return val;
					}
				}
			}
		})
		mui(".mui-bar-tab").on("tap", ".mui-tab-item",app.methods.INDEX_BAR);
		document.getElementById("me-setings").addEventListener("touchend",app.methods.INDEX_SETINGS)
	},
	utils:{
		getMsg:function(){
			var jsonData = JSON.parse(localStorage.getItem("art_user"));
			return jsonData.data;
		}
	}
}