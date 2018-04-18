window.Xeval = new function(){
	this.setUrl = function(url){
		this.evalUrl = url;
	}
	this.UrlModel ={
		LEASE:"http://139.196.113.126/",
		MAIL:"http://139.224.164.193/",
		CRM:"http://192.168.191.1/",
		SERVER:"http://139.196.113.71/",
		ERP:"",
		TEST:"http://139.224.164.193/"
	}
	this.evalUrl = this.UrlModel.MAIL;
	this.getUrl = function(){
		return this.evalUrl;
	}
	this.Post = function(url_,parms,fn,isPlus){
		var getUrl_ = "";
		if(url_.indexOf("http")==0){
			getUrl_ = url_;
		}else{
			getUrl_ = this.evalUrl+url_;
		}
		if(isPlus){
			return this.Eajax(getUrl_,parms,fn);
		}else{
			return this.ajax(getUrl_,parms,fn);
		}
	}
	this.Http = function(Mode,parms,fn,isPlus,header){
		switch(Mode){
			case this.Mode.HTTP_LOGIN:{
				return this.Post("UserInfor/login",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_REGISTER:{
				return this.Post("UserInfor/perRegister",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GETCODE:{
				return this.Post("UserInfor/code",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_CHANGE_TOKEN:{
				return this.Post("UserInfor/ck",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_INDEXIMGS:{
				return this.Post("UserInfor/10004",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_SERVICES:{
				return this.Post("ServiceReservation/receiveService",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_SERVERS_LIST:{
				return this.Post("ServiceReservation/port",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_SERVERS_BY_ID:{
				return this.Post("ServiceReservation/TwoPort",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_SERVERS_JOIN:{
				return this.Post("ServiceReservation/Join",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_HOT:{
				return this.Post("RentsShop/Indexhot",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_QZ:{
				return this.Post("RentsShop/kindserchResult",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_CZ:{
				return this.Post("RentsShop/RentsserchResult",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_ZR:{
				return this.Post("RentsShop/SecondserchResult",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_GET_CZ:{
				return this.Post("RentsShop/contactsPersonJson",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_GET_ZR:{
				return this.Post("RentsShop/contactsPersonSecondJson",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_GET_QZ:{
				return this.Post("RentsShop/AllSeekInforJson",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_GET_SEEK:{
				return this.Post("RentsShop/AllKindList",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_POST_COLLEC:{
				return this.Post("RentsShop/ColltoSQL",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_GET_COLLEC:{
				return this.Post("RentsShop/AppCollUp",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_GET_LEASE_DEL_COLLEC:{
				return this.Post("RentsShop/DeleteRents",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_POST_DETA:{
				return this.Post("Rents/PicPunlic ",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_DELETE_DETA:{
				return this.Post("Rents/DeletePictures ",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_POST_CHUZU:{
				return this.Post("Rents/addRent",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_POST_QIUZU:{
				return this.Post("Rents/addSeek",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_POST_ZHUANR:{
				return this.Post("Rents/addSecond",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_POST_LOGIN:{
				return this.Post("Login/loginfrom",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_SJ:{
				return this.Post("Business/SearchBussinessByRole",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_SJ_BYID:{
				return this.Post("Business/SearchBussinessInfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_CHANGE_BYID:{
				return this.Post("Servicekind/SelectnameByid",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_USER_BYID:{
				return this.Post("Customer/SearchCustomerAllByID",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_SJ_BYID:{
				return this.Post("Business/UpdataBusiness",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_FW_SELECT:{
				return this.Post("Servicekind/ServiceOneSerchTwo",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_USER:{
				return this.Post("Customer/UpdataCustomer",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_PD_STATA:{
				return this.Post("Business/UpdataBusinessStatus",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_USERS:{
				return this.Post("Documentary/SearchUserBystatusStatus",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ATR_UPDATA_PD_USER:{
				return this.Post("Business/UpdataBusinessDocumentary",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ATR_GET_USERID_BYNAME:{
				return this.Post("Customer/SearchByname",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_POSG_SJ:{
				return this.Post("Business/Addbusiness",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_POST_USER:{
				return this.Post("Customer/AddCustomer",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_SX:{
				return this.Post("Business/BussinessScreen",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PD:{
				return this.Post("Business/BussinessSendorders",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PF:{
				return this.Post("CRM_visit/CustomerVisit",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_POST_PF:{
				return this.Post("CRM_visit/AddVisit",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PF_BYID:{
				return this.Post("CRM_visit/SearchVisitByID",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_DELFILE_BYIF:{
				return this.Post("PicturesService/DeletePictures",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_PF_BYIF:{
				return this.Post("CRM_visit/UpdataVisit",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PG:{
				return this.Post("CRM_projectassess/projectassess",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_POST_PG:{
				return this.Post("CRM_projectassess/Addprojectassess",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PG_BYID:{
				return this.Post("CRM_projectassess/projectassessInfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_PG:{
				return this.Post("CRM_projectassess/Updataprojectassess",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_BF_SJID:{
				return this.Post("CRM_visit/VisitByBusinessID",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_PG_SJID:{
				return this.Post("CRM_projectassess/projectassessInforBybuss",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_BJ:{
				return this.Post("CRM_QProgram/Qprogram",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_BJ_BYID:{
				return this.Post("CRM_QProgram/LoadinforQprogram",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_BJ_BYSJID:{
				return this.Post("CRM_QProgram/QprogramByBuss",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_HT:{
				return this.Post("CRM_contract/Contract",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_HT_BYID:{
				return this.Post("CRM_contract/ContractInforByID",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_HT_BY_SJID:{
				return this.Post("CRM_contract/ContractInforByBuss",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_USER_BYID:{
				return this.Post("Documentary/UpdatauserInfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_USER_BYUSER:{
				return this.Post("Documentary/Searchdocumentaryinfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_CHANGE_USER_TOKEN:{
				return this.Post("Login/Changetoken",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_KEHU:{
				return this.Post("Customer/loadCustomer",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_KEHU_BYID:{
				return this.Post("Customer/SearchCustomerAllByID",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_CHILDRENS:{
				return this.Post("Administrator/SearchUserByUserid",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_GET_CHILDRENS_BYID:{
				return this.Post("Administrator/SearchUserByUseridinfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_UPDATA_USERCHILDREND:{
				return this.Post("Administrator/UpdataSoninfor",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_ART_PASW_ISTRUE:{
				return this.Post("Documentary/SearchIsPwdPRO",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTp_ART_UPDATA_PASW:{
				return this.Post("Documentary/UpdataPWD",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTp_ART_POST_USER:{
				return this.Post("Administrator/Addson",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_MAIL_GET_CLASS1:{
				return this.Post("product/getProductKindApp",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_MAIL_GET_CLASS2_BYID:{
				return this.Post("product/getProductKind2ByParent1App",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_MAIL_GET_CLASS3_BYID:{
				return this.Post("product/getProductKind3ByParent1App",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_MAIL_GET_INDEXLIST:{
				return this.Post("productshop/IndexApp",parms,fn,isPlus,header);
			};break;
			case this.Mode.HTTP_MAIL_GET_DETAIL_BYID:{
				return this.Post("productshop/detailApp",parms,fn,isPlus,header);
			};break;
			default:{//
			 	throw new Error("error Mode is "+Mode);
			};break;
		}
	}
	this.Mode = {
		HTTP_LOGIN :10000,//登录--->OK
		HTTP_REGISTER:10001,//注册--->OK
		HTTP_GETCODE:10002,//获取手机验证码--->OK
		HTTP_CHANGE_TOKEN:10003,//自动登录验证令牌--->OK
		HTTP_GET_INDEXIMGS:10004,//获取首页轮播图片----->未实现！
		HTTP_GET_SERVICES:10005,//服务预约。--->OK
		HTTP_GET_SERVERS_LIST:10006,//获取服务预约一二级信息--->OK
		HTTP_GET_SERVERS_BY_ID:10007,//通过服务预约二级信息ID获取三、四级信息--->OK
		HTTP_GET_SERVERS_LOCATION:10008,//获取访问者当前的地区和ip by搜狐--->OK
		HTTP_GET_SERVERS_JOIN:10009,//招商加盟--->OK
		HTTP_GET_LEASE_HOT:10010,//租赁热门信息--->OK
		HTTP_GET_LEASE_QZ:10011,//求租信息--->OK
		HTTP_GET_LEASE_CZ:10012,//出租信息--->OK
		HTTP_GET_LEASE_ZR:10013,//转让信息--->OK
		HTTP_GET_LEASE_GET_CZ:10014,//通过ID获取出租详情--->OK
		HTTP_GET_LEASE_GET_ZR:10015,//通过转让获取转让详情--->OK
		HTTP_GET_LEASE_GET_QZ:10016,//通过ID获取求租信息--->OK
		HTTP_GET_LEASE_GET_SEEK:10017,//查询出的所有类型的接口-做出租-求租-转让的分类查询--->OK
		HTTP_GET_LEASE_POST_COLLEC:10018,//通过出租ID收藏--->OK
		HTTP_GET_LEASE_GET_COLLEC:10019,//获取收藏列表--->OK
		HTTP_GET_LEASE_DEL_COLLEC:10020,//删除收藏--->OK
		HTTP_POST_DETA:10021,//上传文件--->OK
		HTTP_DELETE_DETA:10022,//删除文件--->OK
		HTTP_POST_CHUZU:10023,//发布出租--->OK
		HTTP_POST_QIUZU:10024,//发布求组--->OK
		HTTP_POST_ZHUANR:10025,//发布转让--->OK
		HTTP_ART_POST_LOGIN:10026,//CRM登陆--->OK
		HTTP_ART_GET_SJ:10027,//CRM获取用户商机--->OK
		HTTP_ART_GET_SJ_BYID:10028,//crm通过ID查详情--->OK
		HTTP_ART_CHANGE_BYID:10029,//CRM类型通过id装换成文本--->OK--->已抛弃
		HTTP_ART_GET_USER_BYID:10030,//通过客户ID获取客户详情--->OK
		HTTP_ART_UPDATA_SJ_BYID:10031,//修改商机信息--->OK
		HTTP_ART_GET_FW_SELECT:10032,//获取商机类型--->OK
		HTTP_ART_UPDATA_USER:10033,//修改客户信息--->OK
		HTTP_ART_UPDATA_PD_STATA:10034,//修改派单状态--->OK
		HTTP_ART_GET_USERS:10035,//获取所有可派单人--->OK
		HTTP_ATR_UPDATA_PD_USER:10036,//修改跟单人--->OK
		HTTP_ATR_GET_USERID_BYNAME:10037,//通过用户名模糊查询-->ok
		HTTP_ART_POSG_SJ:10038,//添加商机-->ok
		HTTP_ART_POST_USER:10039,//添加客户-->ok
		HTTP_ART_GET_SX:10040,//获取筛选的商机-->ok
		HTTP_ART_GET_PD:10041,//获取派单信息-->ok
		HTTP_ART_GET_PF:10042,//获取客户拜访列表-->ok
		HTTP_ART_POST_PF:10043,//添加拜访信息-->ok
		HTTP_ART_GET_PF_BYID:10044,//获取拜访详情-->ok
		HTTP_ART_DELFILE_BYIF:10045,//通过id删除远程图片-->ok
		HTTP_ART_UPDATA_PF_BYIF:10046,//通过id修改拜访信息-->ok
		HTTP_ART_GET_PG:10047,//获取需求评估-->ok
		HTTP_ART_POST_PG:10048,//添加需求评估信息-->ok
		HTTP_ART_GET_PG_BYID:10049,//通过评估ID获取评估详情-->ok
		HTTP_ART_UPDATA_PG:10050,//修改评估信息-->ok
		HTTP_ART_GET_BF_SJID:10051,//通过商机ID查看拜访详情-->ok
		HTTP_ART_GET_PG_SJID:10052,//通过商机ID查看评估详情-->ok
		HTTP_ART_GET_BJ:10053,//获取报价信息-->ok
		HTTP_ART_GET_BJ_BYID:10054,//获取报价详细信息-->ok
		HTTP_ART_GET_BJ_BYSJID:10055,//通过商机ID获取报价详细信息-->ok
		HTTP_ART_GET_HT:10056,//获取签单合同信息-->ok
		HTTP_ART_GET_HT_BYID:10057,//通过合同ID获取合同详情-->ok
		HTTP_ART_GET_HT_BY_SJID:10058,//通过商机id获取合同信息-->ok
		HTTP_ART_UPDATA_USER_BYID:10059,//通过商机id获取合同信息-->ok
		HTTP_ART_GET_USER_BYUSER:10060,//通过用户名获取用户详情-->ok
		HTTP_ART_CHANGE_USER_TOKEN:10061,//CRM自动登陆-->ok
		HTTP_ART_GET_KEHU:10062,//获取客户信息
		HTTP_ART_GET_KEHU_BYID:10063,//通过客户ID获取客户详情
		HTTP_ART_GET_CHILDRENS:10064,//获取管理员的子账号
		HTTP_ART_GET_CHILDRENS_BYID:10065,//获取管理员子账号详情
		HTTP_ART_UPDATA_USERCHILDREND:10066,//修改子账号信息
		HTTP_ART_PASW_ISTRUE:10067,//验证旧密码是否正确
		HTTp_ART_UPDATA_PASW:10068,//修改密码
		HTTp_ART_POST_USER:10069,//修改密码
		HTTP_MAIL_GET_CLASS1:10070,//商城一级分类
		HTTP_MAIL_GET_CLASS2_BYID:10071,//通过1及分类拿到2级分类
		HTTP_MAIL_GET_CLASS3_BYID:10072,//通过2及分类拿到3级分类
		HTTP_MAIL_GET_INDEXLIST:10073,//获取商城首页信息
		HTTP_MAIL_GET_DETAIL_BYID:10074,//通过商品id获取商品详情
	}
	this.Eajax = function(url_,data_,fn,header){
		console.log(JSON.stringify(data)+"<-->"+url_)
		if(plus){
			var data = this.formartToken(data_);
			console.log(JSON.stringify(data)+"<-->"+url_)
			var body = "";
			if(typeof(data)=="object"){
				body = JSON.stringify(data);
			}else if(typeof(data)=="string"){
				body = data;
			}else{
				throw new Error("plus ajax:parms error!");
			}
			var xhr = new plus.net.XMLHttpRequest();
			xhr.timeout = 5000;
			xhr.withCredentials = true;
			xhr.open("POST",url_);
			xhr.setRequestHeader('Content-Type','application/json');
			xhr.setRequestHeader(JSON.stringify(header))
			xhr.send(body);
			xhr.onload = function(data){
				if(xhr.status==200){
					try{
						fn(true,JSON.parse(xhr.responseText));	
					}catch(e){
						fn(false,e,xhr.responseText);
					}
				}else{
					fn(false,xhr.responseText);	
				}
			}
			xhr.onerror = function(data){
				fn(false,data)
			}
			xhr.ontimeout = function(){
				fn(false,arguments);
			}
			return xhr;
		}else{
			throw new Error("eval -->Cannot find mui.js ||  Not mobile environment");
		}
	};
	this.ajax = function(url_,data_,fn){
		var data = this.formartToken(data_);
		console.log(JSON.stringify(data)+"<-->"+url_)
		var xmla = mui.ajax({
			type:"post",
			url:url_,
			data:data,
			timeout:4000,
			dataType:"json",
			success:function(){
				fn(true,arguments[0]);
			},
			error:function(){
				fn(false,arguments[0]);
			}
		});
		return xmla;
	}
	this.formartToken = function(data){
		var u = localStorage.getItem("userinfo");
		var userInfo = {};
		try{
			userInfo = JSON.parse(u);
		}catch(e){
			
		}
		if(userInfo && typeof data.Username=="undefined"){//如果自己带了，就不在操作，比如CRM又是一套。特么的！！！！！
			data.Username = userInfo.user;
			data.Token = userInfo.guid;
		}
		return data;
	}
};
