window.sm1z={
	openWindow:function(options){
		if(sm1z.isIos()!=null){//手机模式
			if(typeof(plus) =="undefined"){//浏览器
				sm1z.extras.setExtras(options.url,options.extras);
				delete options.extras;
			}else{//Hybrid
			}
			mui.openWindow(options)
		}else{
			alert(Strings.indexData.index.services.hybridError);
			document.write("");
		}
	},
	extras:{
		setExtras:function(key,jsonString){
			if(typeof(jsonString)=="string"){
				localStorage.setItem(key,jsonString);
			}else if(typeof(jsonString)=="undefined"){
				throw new Error("请检查extras类型！^_^");
			}if(typeof(jsonString)){
				localStorage.setItem(key,JSON.stringify(jsonString));
			}
		},
		getExtras:function(){
			var result = localStorage.getItem(this.getKey());
			if(result){
				result = JSON.parse(result)
			}
			return result;
		},
		delExtras:function(isDel){
			if(isDel){
				localStorage.clear();
			}
		},
		getKey:function(){
			var href = location.pathname;
			var mdirs = href.split("/");
			var key = mdirs[mdirs.length-1];
			return key;
		}
	},
	isIos:function(){
		u = navigator.userAgent; 
		if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
			return false;
		}else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
			return true;
		}else{
			return null;
		}
	}
}
