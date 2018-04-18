function evalCookie() {
	this.overtime = 24 * 60 * 60 * 1000; //day
	this.addCookie = function() {
		var exp = new Date();
		exp.setTime(exp.getTime() + this.overtime);
		document.cookie = arguments[0] + "=" + escape(arguments[1]) + ";expires=" + exp.toGMTString();
	};
	this.setOverTime = function() {
		if(typeof(arguments[0]) == 'number') {
			this.overtime = arguments[0];
		}
	};
	this.getCookie = function() {
		var arr, reg = new RegExp("(^| )" + arguments[0] + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	};
	this.delCookie = function() { //删除不了，使用addCookie(key,null);
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = this.getCookie(arguments[0]);
		if(cval != null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
			cval = this.getCookie(arguments[0]);
			if(cval != null) {
				this.addCookie(cval, null);
			}
		}
	};
}

function evalStorage() {
	this.Mode = {
		localStorage: 0,
		sessionStorage: 1
	}
	this.addStorage = function(mode, key, value) {
		if(mode == this.Mode.localStorage) {
			window.localStorage.setItem(key, value);
		} else if(mode = this.Mode.sessionStorage) {
			window.sessionStorage.setItem(key, value);
		} else {
			throw new Error("eval:Error Mode!");
		}
	}
	this.getStorage = function(mode, key) {
		if(mode == this.Mode.localStorage) {
			return window.localStorage.getItem(key);
		} else if(mode = this.Mode.sessionStorage) {
			return window.sessionStorage.getItem(key);
		} else {
			throw new Error("eval:Error Mode!");
		}
	}
	this.removeStorage = function(mode, key) {
		if(mode == this.Mode.localStorage) {
			window.localStorage.removeItem(key);
		} else if(mode = this.Mode.sessionStorage) {
			window.sessionStorage.removeItem(key);
		} else {
			throw new Error("eval:Error Mode!");
		}
	}
	this.removeAll = function(mode, isOk) {
		if(isOk) {
			if(mode == this.Mode.localStorage) {
				window.localStorage.clear();
			} else {
				window.sessionStorage.clear();
			}
		} else {
			throw new Error("eval:cannot delete data! because need a option");
		}
	}
}

function base64() {
	this.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	this.base64DecodeChars = new Array(　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 　　-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 　　52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, 　　-1, 　0, 　1, 　2, 　3, 4, 　5, 　6, 　7, 　8, 　9, 10, 11, 12, 13, 14, 　　15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, 　　-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 　　41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	this.base64encode = function(str) {　　
		var out, i, len;　　
		var c1, c2, c3;　　
		len = str.length;　　
		i = 0;　　
		out = "";　　
		while(i < len) {
			c1 = str.charCodeAt(i++) & 0xff;
			if(i == len) {　　
				out += this.base64EncodeChars.charAt(c1 >> 2);　　
				out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);　　
				out += "==";　　
				break;
			}
			c2 = str.charCodeAt(i++);
			if(i == len) {　　
				out += this.base64EncodeChars.charAt(c1 >> 2);　　
				out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));　　
				out += this.base64EncodeChars.charAt((c2 & 0xF) << 2);　　
				out += "=";　　
				break;
			}
			c3 = str.charCodeAt(i++);
			out += this.base64EncodeChars.charAt(c1 >> 2);
			out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += this.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
			out += this.base64EncodeChars.charAt(c3 & 0x3F);　　
		}　　
		return out;
	}
	this.base64decode = function(str) {　　
		this.c1, this.c2, this.c3, this.c4;　　
		this.i, this.len, this.out;　　
		len = str.length;　　
		i = 0;　　
		out = "";　　
		while(i < len) {
			do {　　
				c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c1 == -1);
			if(c1 == -1)　　 break;
			/* c2 */
			do {　　
				c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c2 == -1);
			if(c2 == -1)　　 break;
			out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
			/* c3 */
			do {　　
				c3 = str.charCodeAt(i++) & 0xff;　　
				if(c3 == 61)　 return out;　　
				c3 = this.base64DecodeChars[c3];
			} while (i < len && c3 == -1);
			if(c3 == -1)　　 break;
			out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
			/* c4 */
			do {　　
				c4 = str.charCodeAt(i++) & 0xff;　　
				if(c4 == 61)　 return out;　　
				c4 = this.base64DecodeChars[c4];
			} while (i < len && c4 == -1);
			if(c4 == -1)　　 break;
			out += String.fromCharCode(((c3 & 0x03) << 6) | c4);　　
		}　　
		return out;
	}
	this.utf16to8 = function(str) {　　
		var out, i, len, c;　　
		out = "";　　
		len = str.length;　　
		for(i = 0; i < len; i++) {
			c = str.charCodeAt(i);
			if((c >= 0x0001) && (c <= 0x007F)) {　　
				out += str.charAt(i);
			} else if(c > 0x07FF) {　　
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));　　
				out += String.fromCharCode(0x80 | ((c >> 　6) & 0x3F));　　
				out += String.fromCharCode(0x80 | ((c >> 　0) & 0x3F));
			} else {　　
				out += String.fromCharCode(0xC0 | ((c >> 　6) & 0x1F));　　
				out += String.fromCharCode(0x80 | ((c >> 　0) & 0x3F));
			}　　
		}　　
		return out;
	}
	this.utf8to16 = function(str) {　　
		var out, i, len, c;　　
		var char2, char3;　　
		out = "";　　
		len = str.length;　　
		i = 0;　　
		while(i < len) {
			c = str.charCodeAt(i++);
			switch(c >> 4) {　
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					　　 // 0xxxxxxx  
					　　out += str.charAt(i - 1);　　
					break;　
				case 12:
				case 13:
					　　 // 110x xxxx　 10xx xxxx  
					　　char2 = str.charCodeAt(i++);　　
					out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));　　
					break;　
				case 14:
					　　 // 1110 xxxx　10xx xxxx　10xx xxxx  
					　　char2 = str.charCodeAt(i++);　　
					char3 = str.charCodeAt(i++);　　
					out += String.fromCharCode(((c & 0x0F) << 12) | 　　　　((char2 & 0x3F) << 6) | 　　　　((char3 & 0x3F) << 0));　　
					break;
			}　　
		}　　
		return out;
	}

	
}

function isIos() {
	u = navigator.userAgent;
	if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
		return false;
	} else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		return true;
	} else {
		return null;
	}
}
window.eLog = new function() {
	var isDebug = false;
	if(typeof(Strings)=="object"){
		isDebug = Strings.App.isDebug;
	}
	this.e = function(msg) {
		if(isDebug) {
			console.error(msg);
		}
	}
	this.l = function(msg) {
		if(isDebug) {
			console.log(msg);
		}
	}
	this.w = function(msg) {
		if(isDebug) {
			console.warn(msg);
		}
	}
	this.g = function(msg) {
		if(isDebug) {
			console.group(msg);
		}
	}
	this.eg = function(msg) {
		if(isDebug) {
			console.groupEnd(msg);
		}
	}
	this.i = function(msg) {
		if(isDebug) {
			console.dir(msg);
		}
	}
	this.x = function(msg) {
		if(isDebug) {
			console.dirxml(msg);
		}
	}
	this.t = function(timer) {
		if(isDebug) {
			console.time(timer);
		}
	}
	this.et = function(timer) {
		if(isDebug) {
			console.timeEnd(timer);
		}
	}
	this.p = function(op) {
		if(isDebug) {
			console.profile(op);
		}
	}
	this.ep = function(op) {
		if(isDebug) {
			console.profile(op);
		}
	}
}

function isLogin(isBack) {
	//判断是否登录,
	//isBack 表示是否自动切换到登录页面
	var storage_ = new evalStorage();
	var mode_ = storage_.Mode;
	var userInfo = storage_.getStorage(mode_.localStorage, "userinfo");
	if(!!userInfo) {
		return true;
	} else {
		if(isBack) {
			mui.openWindow({
				url: "../login.html",
				id: "_login.html",
				createNew: true,
				extras: {
					isBack: true
				}
			})
		} else {
			return false;
		}
	}
};
(function() {
	var items = document.getElementsByClassName("tel-phone");
	for(var i=0;i<items.length;i++){
		items[i].addEventListener("touchend",function(){
			callPhone(this);
		})
	}
})();
function callPhone(e) {
	var phone = "";
	if(typeof(e) == "string") {
		phone = e;
	} else {
		phone = e.getAttribute("rel");
	}
	if(mui.os.plus) {
		mui.confirm(phone, Strings.App.CallPhone, Strings.App.CallPhoneBtns, function(e) {
			if(e.index == 0) {
				plus.device.dial(phone);
			} else {
				mui.toast("您取消拨打电话!");
			}
		});
	} else {
		location.href = 'tel:' + phone;
	}
}