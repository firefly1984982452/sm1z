window.evalService = function(text_) {
	this.dialog = mui.prompt;
	this.index = -1;
	this.markHtml = null;
	this.oldBcak = null;
	this.muiXrl = null;
	this.showTile = null;
	this.init = (function(text_) {
		//构造器
		this.markHtml = mui("#service_mark")[0];
		if(typeof(text_) == "string") {
			this.showTile = mui("#service_mark>.mark_content>p")[0];
		}
		this.oldBcak = mui.back;
	})(text_);
	this.show = function(parms) {
		var val = Strings.indexData.index.services;
		var storage_ = new evalStorage();
		var mode_ = storage_.Mode;
		var userInfo = JSON.parse(storage_.getStorage(mode_.localStorage, "userinfo"));
		var serverData = {};
		serverData.location = "1";
		serverData.services = JSON.stringify(parms);//字符转义
		if(!!userInfo) {
			serverData.phone = userInfo.data.mobile;
			serverData.name = userInfo.user;
		} else {
			serverData.name = "hybridApp@"+ (+new Date());
			serverData.phone = "请输入您的电话号码";
		}
		this.dialog(val.confirmPhone, serverData.phone, val.isAppointment, val.appointmentBtns, function(e) {
			this.index = e.index;
			var phone_ = e.value;
			if(this.index == 0) {
				if(phone_.length>0){
					if(/^1[3|4|5|7|8]\d{9}$/.test(phone_)) {
						serverData.phone = phone_;
					} else {
						mui.alert(val.appointmentMobileError, val.appointmentErrorTitle, val.appointmentBtn);
						return;
					}
				}
				this.markHtml.style.display = "block";
				mui.back = function() { //重写mui返回键
					mui.confirm(val.servicesCancelContent, val.servicesCancelTitle, val.servicesCancelBtns, function(e) {
						if(e.index == 0) {
							if(this.muiXrl != null) {
								this.muiXrl.abort(); //取消网络请求
							}
							mui.back = this.oldBcak;
							this.markHtml.style.display = "none";
						}
					});
				}
				getLocationx(function(location) {
					serverData.location = location;
					this.muiXrl = Xeval.Http(Xeval.Mode.HTTP_GET_SERVICES, serverData, function(isOk, data) {
						this.markHtml.style.display = "none";
						mui.back = this.oldBcak; //还原返回键
						eLog.l(JSON.stringify(data));
						if(isOk) {
							eLog.l(data.msg)
							if(data.state == -1) {
								mui.alert(data.msg, val.appointmentOkTitle, val.appointmentBtn);
							} else {
								mui.alert(data.msg, val.serverTitle, val.appointmentBtn);
							}
						} else {
							eLog.l("e")
							mui.alert(val.appointmentError, val.appointmentErrorTitle, val.appointmentBtn);
						}

					});
				});

			} else {
				this.index = -1;
				this.muiXrl = null;
				this.parms = null;
				mui.toast(val.cancelAppointment);
			}
		});
	}
	var getLocationx = function(fn) {
		var that = this.showTile;
		plus.geolocation.getCurrentPosition(showPosition, errotPostion, {} );
		function showPosition(position) {
			locationFormart([position.coords.latitude, position.coords.longitude], fn);
		}
		function errotPostion() {
			var city = returnCitySN?returnCitySN["cname"]:"null";
			fn(city);
		}
	}
	var locationFormart = function(postion, fn) { //根据定位的经纬度用百度定位具体地址
		//todo  position.addresses原生可以获取，兼容浏览器写法。后期支持取消app
		mui.ajax({
			url: "http://api.map.baidu.com/geocoder/v2/?ak=bH1RdlxwMQrZbgxXRlt6e8YG6eAuvubA&callback=renderReverse&output=xml&pois=1",
			dataType: "text/xml;charset=utf-8",
			type: "post",
			data: "location=" + postion,
			success: function(data) {
				fn($(data).find("formatted_address").text());//别慌，返回的是xml当做html处理！
			},
			error: function() {
				fn(returnCitySN?returnCitySN["cname"]:"null");
			}
		})
	}
}