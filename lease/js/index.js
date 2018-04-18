mui.plusReady(function(){
	var lease_url = "http://139.196.113.126";
	var tapS = {
		CzTap:function(id,e){
			openPage(id,1);
		},
		QzTap:function(id,e){
			openPage(id,2);
		},
		ZrTap:function(id,e){
			openPage(id,3);
		}
	}
	function changePage(op){
		mui.openWindow({
			url:"pullrefresh_main.html",
			id:"pullrefresh_main.html",
			createNew:true,
			extras:{
				data_op:op
			}
		})
	}
	mui(".mui-bar").on("tap",".index-shouc",function(){
		mui.openWindow({
			url:"collect.html",
			id:"collect.html",
			cteateNew:false
		})
	})
	function openPage(id,op){
		mui.openWindow({
			url:"classfly.html",
			id:"classfly.html",
			createNew:true,
			extras:{
				data_op:op,
				data_id:id
			}
		})
	}
	 Vue.filter( 'picture' , function(value) {
	 	 if(value && Array.isArray(value)){
       		var index = Math.ceil(Math.random()*value.length)-1;
       		return value[index].Url;
        }else{
       		return "../images/img_loading.jpg";
        }
  	});
	var vm = new Vue({
		el:".hot-content",
		data:{
			Rents:[],
			second:[],
			seek:[]
		},
		methods:tapS
	})
	Xeval.setUrl(lease_url+"/");
	Xeval.Http(Xeval.Mode.HTTP_GET_LEASE_HOT,{},function(isOk,data){
		console.log(JSON.stringify(data))
		if(isOk){
			vm.$data = data;
		}else{
			mui("网络错误!");
		}
	},true);
	mui("#index_select").on("tap","li",function(e){
		var index = this.getAttribute("data-index");
		changePage(index);
	})
	 mui('.mui-slider').slider({
	  interval:3000
	});
})