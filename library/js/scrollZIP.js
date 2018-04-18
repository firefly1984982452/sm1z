mui.plusReady(function(){
	var t;
	if(plus.os.name=="Android"){
		set();
	}
	function set(){
		console.log("set")
		var top;
		var isOk = false;
		try{
			document.querySelector(".mui-pull-top-pocket").style.marginTop = "40px";
			isOk = true;
		}catch(e){
			t = setTimeout(set,100);
		}
		if(isOk){
			clearTimeout(t);
		}
	}
})
