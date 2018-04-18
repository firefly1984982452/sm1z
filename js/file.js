var evalFile = {
	datas:{
		Dir:"_downloads/",
		dtask:null
	},
	down:function(url_,fileName,progressHandler){
		var options = {};
		if(typeof(fileName)=='string' && fileName.trim()!="" && fileName!=null){
			var hzui  = "";
			if(fileName.lastIndexOf(".")<0){
				var index = url_.lastIndexOf(".");
				hzui= url_.substring(index,url_.length);
			}
			options = {filename:evalFile.datas.Dir+fileName+hzui}
		}else if(typeof(fileName)=='object'){
			options = fileName;
		}
		evalFile.datas.dtask = plus.downloader.createDownload(url_,options);
		evalFile.datas.dtask.addEventListener( "statechanged", progressHandler, false );
		evalFile.datas.dtask.start(); 
	},
	getFileList:function(fn){
		plus.io.resolveLocalFileSystemURL(evalFile.datas.Dir, function ( entry ) {
				entry.getMetadata( function ( metadata ) {
					if ( entry.isDirectory ) {
						var dirReader = entry.createReader();
						dirReader.readEntries( function( entries ) {
							var dir = entry.toURL()+"/";
							fn(entries);
						}, function ( e ) {
							console.log("x")
							return [];
						} );
					}else{
						console.log("y1")
					}
				}, function ( e ) {
					console.log("y")
					return [];
				}, false );
			}, function ( e ) {
				return [];
			} );
	},
	openFile:function(filename,fn){
		plus.runtime.openFile(filename, fn);
	},
	clearDown:function(){
		plus.downloader.clear();
	},
	dateFormart:function(datetime){
		var year = datetime.getFullYear(),
		month = datetime.getMonth()+1,
		date = datetime.getDate(),
		hour = datetime.getHours(),
		minutes = datetime.getMinutes(),
		second = datetime.getSeconds();
		if ( month < 10 ) {
			month = "0" + month;
		}
		if ( date < 10 ) {
			date = "0" + date;
		}
		if ( hour < 10 ) {
			hour = "0" + hour;
		}
		if ( minutes < 10 ) {
			minutes = "0" + minutes;
		}
		if ( second < 10 ) {
			second = "0" + second;
		}
		return (year+"-"+month+"-"+date+" "+hour+":"+minutes+":"+second);
	}
}
