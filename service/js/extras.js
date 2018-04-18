//数据传输！针对get不能携带大数据，单页面post不能接收问题处理方法
//构想：
//		1.使用cookie
//		2.使用get
//		3.使用本地缓存 <-----目前使用这种，安卓ios都支持h5新特性
//方案：
//		1.使用herf携带本地数据的key值(必要吗？先用着)，获取key之后取对应value,并删除本地存储的数据
//		2.速度影响--未深究,比herf解析可能会快一些！
//实现
window.extras = new function(){
	this.keys = [];
	this.setExtras = function(key,jsonString){
		localStorage.setItem(key,jsonString);
		this.keys.push(key);
	}
	this.getExtras = function(key){
		var result = localStorage.getItem(key);
		if(result){
			localStorage.removeItem(key);
		}
		return result;
	}
}
