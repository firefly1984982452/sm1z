var edialog = {
	doms:{
		dialog:null,
		pro:null,
		fn:null,
		isShow:false,
		back:null
	},
	init:function(msg,fn,bcakLisner){
		edialog.msg = msg;
		edialog.doms.fn = fn;
		edialog.doms.dialog = mui("#dialog");
		edialog.doms.pro = mui("#dialog .msg");
		edialog.doms.pro[0].innerText = msg;
		edialog.doms.dialog.on("tap",".btn",edialog.methods.cancel);
		edialog.doms.dialog[0].addEventListener("touchmove",function(e){
			e.preventDefault();
			e.stopPropagation();
		})
		edialog.doms.back = mui.back;
		mui.back = function(){
			bcakLisner();
		}
	},
	methods:{
		cancel:function(){
			if(typeof(edialog.doms.fn)=="function"){
				edialog.doms.fn();
			}else{
				edialog.doms.dialog[0].style.display="none";
			}
		}
	},
	updataPro:function(msg){
		edialog.doms.pro[0].innerText = msg;
	},
	back:function(){
		edialog.doms.dialog[0].removeEventListener("touchmove");
		if(typeof(edialog.doms.fn)=="function"){
			edialog.doms.fn();
		}else{
			edialog.doms.back();
		}
		
	},
	cancel:function(){
		edialog.doms.dialog[0].style.display = 'none';
	},
	show:function(){
		edialog.doms.dialog[0].style.display = "block";
	},
	isShow:function(){
		if(edialog.doms.dialog[0].style.display=="none"){
			return false;
		}else{
			return true;
		}
	}
}
