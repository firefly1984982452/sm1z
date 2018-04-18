Vue.filter("sjly", function(val) {
	const vals = ["合作伙伴", "老客户介绍", "平台", "公司资源", "网络渠道", "本人开发"];
	return vals[pareInt(val)];
})
Vue.filter("sjlx", function(val) {
	const vals = ["项目施工", "服务保养"];
	return vals[pareInt(val)];
})
Vue.filter("sjrq", function(val) {
	if(val){
		var b = val.replace(/[^0-9]+/ig, "");
		var d = new Date(parseInt(b));
		return d.Format("yyyy年MM月dd日");
	}else{
		return "";
	}
	
})
Vue.filter("pdzt", function(val) {
	const vals = ["未被筛选", "派单","转单","放弃"];
	return vals[pareInt(val,true,"pdzt")];
})//fabj
Vue.filter("fapg", function(val) {
	const vals = ["未评估", "已评估"];
	return vals[pareInt(val,true,"fapg")];
})
Vue.filter("fabj", function(val) {
	const vals = ["未报价", "已报价"];
	return vals[pareInt(val,true,"fabj")];
})
Vue.filter("htlx", function(val) {
	const vals = ["开口合同", "闭口合同"];
	return vals[pareInt(val)];
})
Vue.filter("htxz", function(val) {
	const vals = ["服务保养", "工程项目"];
	return vals[pareInt(val)];
})
Vue.filter("hzfs",function(val){
	const vals = ["临时", "长期","战略合作"];
	return vals[pareInt(val)];
})
Vue.filter("khlx",function(val){
	const vals = ["个人", "企业"];
	return vals[pareInt(val)];
})
Vue.filter("bfxs",function(val){
	const vals = ["电话", "上门"];
	return vals[pareInt(val)];
})
Vue.filter("khfk",function(val){
	const vals = ["认可","观望","冷漠"];
	return vals[pareInt(val)];
})
Vue.filter("skhfk",function(val){
	const vals = ["认可","重做","部分修改"];
	return vals[pareInt(val)];
})
Vue.filter("bfmd",function(val){
	const vals = ["熟悉客户建立感情", "了解客户需求3","现场勘查诊断","方案论证","报价论证6","商定合同","挖掘商机需求","其他"];
	return vals[pareInt(val)];
})

Vue.filter("khgm",function(val){
	const vals = ["小型", "中型","大型"];
	return vals[pareInt(val)];
})
Vue.filter("kind_byhttp_1",function(val){
	var str = val.toString();
	var vals = str.split(",");
	if(vals.length>0){
		return vals[0];
	}else{
		return "类型获取失败"
	}
})
Vue.filter("kind_byhttp_2",function(val){
	var str = val.toString();
	var vals = str.split(",");
	if(vals.length>1){
		return vals[1];
	}else{
		return "类型获取失败"
	}
})
function pareInt(val,change,txt){
	var index = 0;
	try {
		var ind = parseInt(val);
		index = ind-1;
		if(change){
			++index;
		}
	} catch(e) {

	}
	return index;
}
Date.prototype.Format = function(fmt) { 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}