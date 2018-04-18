window.Strings = new function(){
	this.Login ={
		LoginTitle:"饰管家登录提示",
		userPaswNull:"账号或密码不能为空！",
		btnValue:"朕知道了",
		upLoad:"正在加载...",
		loging:"正在登录...",
		autoLoging:"自动登录中...",
		autoLoginError:"账号信息已经过期,请重新登录",
		login:"登录"
	}
	this.Register = {
		registerTitle:"饰管家注册提示",
		btnValue:this.Login.btnValue,
		backMsg:"退出后将不保存当前数据",
		backTitle:"是否取消注册？",
		backBtns:["朕知道了","取消"],
		phoneIsError:"请输入正确的手机号码！",
		msgData:{
			name:"用户名不能为空",PWD:"用户密码不能为空",PWD_1:"确认密码不能为空",
			mobile:"手机号码不能为空",smcode:"验证码不能为空",name_1:"企业名称不能为空",
			province:"省份不能为空",city:"城市不能为空",district:"区域不能为空",
			address:"地址不能为空",contactor:"联系人不能为空",Email:"E-mail不能为空",
			fax:"传真不能为空",URL:"网址不能为空",postcode:"邮编不能为空",
			Licenseno:"企业营业执照不能为空",Taxcode:"税务号不能为空",kind:"公司性质",
			scale:"公司规模不能为空",profit:"利润信息不能为空",qq:"QQ号不能为空"
		},
		msgRegx:{
			name:{reg:/^[a-zA-Z]+\w{5,}/,msg:"用户名必须以字母开头,长度大于6位！"},
			PWD:{reg:/^(?![^a-zA-Z]+$)(?!\D+$).{6,16}$/,msg:"密码长度6-16位，必须包含字母和数字！"},
			mobile:{reg:/^1[3|4|5|7|8]\d{9}$/,msg:"手机号码错误！"},
			smcode:{reg:/\d{4}/,msg:"验证码输入错误！"},
			Email:{reg:/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,msg:"邮箱格式错误！"},
			URL:{reg:/^[http|https]/,msg:"网址输入错误！需要http或https开头"},
			Taxcode:{reg:/\d{15}/,msg:"税务号输入错误！"},
			qq:{reg:/^\d{5,11}$/,msg:"QQ号码错误！只能是5到11位数字"},
			Licenseno:{reg:/\w{15,18}/,msg:"企业营业执照长度输入错误！长度为15位或者18位数字"}
		},
		pwdError:"两次密码不一致"
	},
	this.indexData={
		index:{
			services:{
				confirmPhone:"请确认您的手机号码",
				isAppointment:"是否预约",
				appointmentBtns:["确认","取消"],
				appointmentOk:"恭喜您，已经预约成功啦！我们将尽快和您取得联系",
				appointmentError:"非常抱歉，您的预约失败了，请登录官网或者联系客服预约，感谢您的支持。",
				appointmentOkTitle:"恭喜，预约成功",
				appointmentErrorTitle:"抱歉，预约失败了",
				appointmentBtn:"朕知道了",
				appointmentMobileError:"手机号码错误",
				servicesCancelTitle:"是否取消预约？",
				servicesCancelBtns:["确认","取消"],
				servicesCancelContent:"取消当前请求，我们将不能收到您的预约请求",
				serverLengthError:"请至少选定一个预约项目",
				serverTitle:"预约温馨提示：",
				cancelAppointment:"您取消了服务预约请求！",
				serverNetworkErrorAgain:"您的网络出了一点故障，正在尝试重新连接",
				serverNetworkError:"请检查一下您的网络环境，或者联系我们的客服，抱歉！",
				join:{
				msgData:{
					kind:"请选择公司性质",
					name:"请输入您的姓名",
					phone:"请输入您的联系方式",
					city:"请选择您的所在城市",
					huji:"请输入您的户籍",
					sex:"请选择您的性别",
					age:"请输入您的年龄",
					xueli:"请选择您的学历",
					hy:"请输入您从事的行业",
					nianxian:"请输入您的工作年限"
				},
				regData:{
					kind:{reg:null,msg:""},
					name:{reg:/^[\u4e00-\u9fa5]{1,4}$/,msg:"您的姓名输入有误,\r\n 只能1-4个中文字符"},
					phone:{reg:/^1[3|4|5|7|8]\d{9}$/,msg:"手机号码输入错误"},
					city:{reg:null,msg:""},
					huji:{reg:null,msg:""},
					sex:{reg:null,msg:""},
					age:{reg:/([0-9]{0,2})|(1([0-1][0-9]|20))/,msg:"您的年龄输入错误 \r\n 只能1-120的数字"},
					xueli:{reg:null,msg:""},
					hy:{reg:null,msg:""},
					nianxian:{reg:/([0-9]{0,2})|(1([0-1][0-9]|20))/,msg:"工作年限有误 \r\n 只能1-120的数字"}
				},
				title:"饰管家温馨提醒",
				btnValue:"朕知道了",
				postError:"由于网络原因，您的信息提交失败了，请检查网络或者重新提交",
				postBtn:["再试试","取消"]
			}
			},
			lease:{
				collect:{
					collectSuccess:"收藏成功！",
					collectError:"收藏失败",
					removeCollect:"是否删除该物品？\r\n删除后不可恢复！",
					removeCollectAll:"是否删除全部收藏的商品,\r\n删除后不可恢复！",
					removeConllectBtns:["朕已经了解","朕考虑一下"],
					leaseTitle:"饰管家-租赁温馨提示"
				},
				leaseNetworkError:"请检查一下您的网络环境，或者联系我们的客服，抱歉！",
				leaseTitle:"饰管家-租赁温馨提示",
				leaseBtns:["朕知道了","取消"],
				leaseBtn:"朕知道了",
				updataRegs:{
					title:"饰管家温馨提醒",
					btnValue:"朕知道了",
					postError:"由于网络原因，您的信息提交失败了，请检查网络或者重新提交",
					postBtn:["再试试","取消"],
					ppai:{
						msg:"商品品牌不能为空！",
						reg:/^(?! +$).+/
					},
					xhao:{
						msg:"型号规格不能为空！",
						reg:/^(?! +$).+/
					},
					dqu :{
						msg:"所在地区不能为空！",
						reg:/^(?! +$).+/
					},
					sliang:{
						msg:"数量只能输入数字!",
						reg:/\d/
					},
					jge:{
						msg:"价格只能输入数字!",
						reg:/\d/
					},
					lbie:{
						msg:"商品类别不能为空！",
						reg:/^(?! +$).+/
					},
					zliang:{
						msg:"商品重量只能输入数字!",
						reg:/\d/
					},
					yxq:{
						msg:"有效期只能输入数字!",
						reg:/\d/
					},
					schang:{
						msg:"有效时常只能输入数字!",
						reg:/\d/
					},
					dwei:{
						msg:"单位不能为空!",
						reg:/^(?! +$).+/
					},
					mshu:{
						msg:"设备描述不能为空!",
						reg:/^(?! +$).+/
					},
					bzou:{
						msg:"使用步骤不能为空!",
						reg:/^(?! +$).+/
					},
					sxiang:{
						msg:"注意事项不能为空！",
						reg:/^(?! +$).+/
					},
					fwu:{
						msg:"售后服务不能为空！",
						reg:/^(?! +$).+/
					},
					cdi:{
						msg:"场地不能为空！",
						reg:/^(?! +$).+/
					},
					zrjg:{
						msg:"转让价格只能输入数字!",
						reg:/\d/
					},
					psong:{
						msg:"转让价格只能输入数字!",
						reg:/\d/
					},
					dhua:{
						reg:/^1[3|4|5|7|8]\d{9}$/,
						msg:"手机号码输入错误"
					},
					fwei1:{
						msg:"租金范围只能输入数字!",
						reg:/\d/
					},
					fwei2:{
						msg:"租金范围只能输入数字!",
						reg:/\d/
					},
					psong:{
						msg:"配送方式不能为空！",
						reg:/^(?! +$).+/
					},
					spin:{
						msg:"求租商品不能为空！",
						reg:/^(?! +$).+/
					},
					lxr:{
						msg:"联系人不能为空！",
						reg:/^(?! +$).+/
					},
					sming:{
						msg:"求组说明不能为空！",
						reg:/^(?! +$).+/
					}
				}
			}
			
		},
		community:{},
		me:{
			loginOutTitle:"退出登录提示",
			loginOutMsg:"退出后,将会丢失当前未完成的操作！",
			loginOutBtn:"朕知道了"
		},
		help:{}
	},
	this.App = {
		networkError:"网络错误,请检查网络或通知管理员",
		unknownError:"未知错误,请联系管理员维护",
		styleColor:"#9c052e",
		twoBack:"再按一次退出程序！",
		name:"饰管家",
		company:"度科（上海）网络科技有限公司",
		address:"上海市松江区沪松公路1177号佳预信息科技大厦C栋603室",
		version:"v 0.10",
		copyright:"(c) Copyright 2016 shiguanja. All Rights Reserved." ,
		isDebug:true,
		shareTitle:"饰管家-一个Ok的选择",
		shareContext:"聚焦建筑饰面修饰细分领域,一站式解决厂业集成痛点",
		shareHref:"http://www.shiguanja.com",
		CallPhone:"是否拨打电话？",
		CallPhoneBtns:["拨打","取消"]
	}
}
