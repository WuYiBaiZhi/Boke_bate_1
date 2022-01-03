//欢迎弹窗
//alert("欢迎来到我的博客")
//2022倒计时
setInterval (function() {
	var now = new Date()
	var nix = new Date(2022,0,1,0,0,0)
	var Now_times = (nix - now) / 1000
	var day = Math.trunc(Now_times / (60*60*24))
	var hor = Math.trunc(Now_times % (60*60*24) / (60*60))
	var min = Math.trunc(Now_times % (60*60*24) % (60*60) / 60)
	var set = Math.trunc(Now_times % 60 )
	time_list = {day:day,hor:hor,min:min,set:set}
	console.log(time_list)
	var time_text = document.querySelector(".time")
	time_text.innerHTML = "距离2022年还差 " + day + "天" + hor + "小时" + min + "分钟" + set + "秒"
},1000)