mui.plusReady(function(){
	/*
	 *不是不给注释，我特么很尴尬！ 
	 * 没有半点想法想继续维护，10天写一个CRM 50个接口！！！！！
	 * */
	var saveUrl ="http://139.224.164.193/Rents/PicPunlic"
	var saveLen = [];
	var evalimgI = 0;
	var options = null;
	var callback = null;
	model = Xeval.Mode.HTTP_DELETE_DETA;
	window.setPhotUrl = function(ur,mode,option,cb){
		saveUrl = ur;
		model = mode;
		options = option;
		callback = cb;
	}
	mui("#image-list").on("tap", ".add", function(e) {
			if(mui.os.plus){
				var url = "";
				var a = [{
					title: "拍照"
				}, {
					title: "从手机相册选择"
				}];
				plus.nativeUI.actionSheet({
					title: "选择上传图片",
					cancel: "取消",
					buttons: a
				}, function(b) {
					switch (b.index) {
						case 0:
							break;
						case 1:
							getImage();
							break;
						case 2:
							galleryImg();
							break;
						default:
							break
					}
				})	
			}
			
		});
function getImage() {
	var c = plus.camera.getCamera();
	c.captureImage(function(e) {
		plus.io.resolveLocalFileSystemURL(e, function(entry) {
			compressImage(entry);
		})
		,
		function(e) {
			console.log("读取拍照文件错误：" + e.message);
	}, function(s) {
		console.log("error" + s);
	}
	})
}

function galleryImg() {
	plus.gallery.pick(function(a) {
		plus.io.resolveLocalFileSystemURL(a, function(entry) {
			compressImage(entry);
		});
	}, function(a) {}, {
		filter: "image"
	})
};
	// 创建上传任务
function createUpload(path) {
	plus.io.resolveLocalFileSystemURL(path,function(entry){
		entry.file(function(file){
			var user = options==null?formartToken({}):options;
			var task = plus.uploader.createUpload(saveUrl, 
				{ method:"POST",priority:100 },
				function ( t, status ) {
					console.log(status);
					if ( status == 200 ) { 
						try{
							var data = JSON.parse(t.responseText);
							if(data.state ==1){
								if(callback==null){
									show(data.data.Url,data.data.ID);
								}else{
									callback(data.data.Url,data.data.ID);
								}
								entry.remove(function(){
									console.log("本地图片删除完成！");
									mui.toast("上传图片完成,加载图片中..");
								});
							}else{
								mui.alert(data.msg);
							}
						}catch(e){
							//TODO handle the exception
						}finally{
							setTimeout(function(){
								if(callback==null){
									mui("#imgSeek")[0].value = 0;
									mui(".protxt")[0].innerText = "0%";
								}
								plus.nativeUI.closeWaiting();
							},200);
						}
						
					} else {
						mui.alert("网络错误，图片上传失败");
					}
				}
			);
			var name = user.Username;
			var guid = user.Token;
			var floatSize = (name+guid+"UserNameToken").length*8;
			task.addEventListener( "statechanged", function(n,t){//做上传进度！
				var val = Math.floor(task.uploadedSize/(file.size+floatSize)*100);
				if(callback==null){
					mui("#imgSeek")[0].value = val;
					mui(".protxt")[0].innerText = val+"%";
				}
			}, false );
			var addfile = task.addFile( path, {key:file.name});
			task.addData("UserName", name);
			task.addData("Token", guid);
			task.start();
	})
	},function(){
		mui.toast("请检查是否拥有文件系统权限");
	})
	
}
function show(e,id){
	var box = $("#image-list");
	var li;
	if(saveLen.length<3){
		saveLen.push({
			url:e,
			id:id
		});
		box.find(".add").show(200);
		li = $('<li data-id="'+id+'" class="imgbox"><img src="'+e+'"><span class="close">X</span></li>');
	}else{
		alert("只能上传三张图片");
	}
	if(saveLen.length==3){
		box.find(".add").hide();
	}
	box.find(".add").before(li);
}
function compressImage(entry){
	if(callback!=null){
		plus.nativeUI.showWaiting("上传文件中,请稍等...");
	}
	var name = entry.name;
	var path = "file://"+entry.fullPath;
	var qualityMax = 60;
	var maxSize = 1024*1024;
	entry.file(function(file){
		var size = file.size;
		if(size>maxSize){
			mui.toast("文档大于1M,自动压缩成1M以下文档");
			qualityMax = size/maxSize*100>qualityMax?qualityMax:size/maxSize*100;
		}
		plus.zip.compressImage({
			src:path,
			dst:path,
			quality:qualityMax,
			overwrite:true
		},
		function() {
			mui.toast("图片上传中,请耐心等待上传完毕...");
			createUpload(path);
		},function(e) {
			mui.alert("图片压缩出错\r\n1.请联系管理员\r\n2.更换手机试试");
		});
	})
	
}
$("#image-list").on("touchend",function(e){
	if(e.target.className=="close"){
		var id = $(e.target).parent().hide(300,function(){
			$(e.target).parent().remove();
			Xeval.Http(model,{id:id},function(isOk,data){
				//todo 建立为删除存档！
				console.log("删除远程图片:"+JSON.stringify(data));
			})
		}).attr("data-id");
		saveLen.forEach(function(item,n){
			if(id == item.id){
				saveLen.splice(n,1);
			}
		})
	}
	if(saveLen.length<3){
		$("#image-list .add").show(300);
	}
	
})
function formartToken(data){
		var userInfo = JSON.parse(localStorage.getItem("userinfo"));
		if(userInfo){
			data.Username = userInfo.user;
			data.Token = userInfo.guid;
		}
		return data;
	}
})