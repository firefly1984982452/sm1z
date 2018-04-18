Vue.filter("times1",function(val){
	if(typeof(val)=="number"||typeof(val)=="string"){
		var value = val.toString();
		var att = value.split("");
		if(att.length==1){
			return "0";
		}else{
			return att[0];
		}
	}
	
})
Vue.filter("times",function(val){
	console.log(val)
	if(typeof(val)=="number"||typeof(val)=="string"){
		var value = val.toString();
		var att = value.split("");
		if(att.length==1){
			return att[0];
		}else{
			return att[1];
		}
	}
})
