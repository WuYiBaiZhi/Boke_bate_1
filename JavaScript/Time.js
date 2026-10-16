//欢迎弹窗
//alert("欢迎来到我的博客")
//本年+1倒计时
setInterval(function () {
    let now = new Date()
    // 获取当前年份
    let nowYear = new Date().getFullYear() + 1;
    //
    let nextTime = new Date(nowYear, 0, 1, 0, 0, 0);
    let Now_times = (nextTime - now) / 1000
    let day = Math.trunc(Now_times / (60 * 60 * 24))
    let hor = Math.trunc(Now_times % (60 * 60 * 24) / (60 * 60))
    let min = Math.trunc(Now_times % (60 * 60 * 24) % (60 * 60) / 60)
    let set = Math.trunc(Now_times % 60)
    let time_list = {day: day, hor: hor, min: min, set: set}
    // console.log(time_list)
    console.log("现在年份" + nowYear);
    let time_text = document.querySelector(".time")
    time_text.innerHTML = "距离"+nowYear+
    "年还差 " + day + "天" + hor + "小时" + min + "分钟" + set + "秒"
}, 1000)