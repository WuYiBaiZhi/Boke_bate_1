window.onload = function() {
    var content = document.getElementById("content");
    var upDataButton = document.getElementById("upDataMessage");
    upDataButton.onclick = upData;
    function upData () {
        // 获取或创建元素
        var inputUserName = document.getElementById("inputUserName");
        var inputMessage = document.getElementById("inputMessage");
        var messagesBox = document.createElement("div");
        var messageBox = document.createElement("div");
        var img = document.createElement("img");
        var messageHead = document.createElement("div");
        var userP = document.createElement("p");
        var userLink = document.createElement("a");
        var footer = document.createElement("footer");
        var p = document.createElement("p");
        var timeSpan = document.createElement("span");
        var messgeText = document.createElement("div");
        var now_time = new Date();
        //添加参数
        img.src = "../IMG/baizhi.ico";
        img.alt = "userImg"
        messagesBox.className = "messagesBox";
        messageBox.className = "messageBox";
        messageHead.className = "messageHeader";
        userP.className = "user";
        userLink.href = "http://baidu.com";
        console.log(inputUserName.value);
        if (inputUserName.value != "") {
            userLink.text = inputUserName.value;
        } else {
            userLink.text = "匿名用户";
        }
        timeSpan.className = "messageTime";
        messgeText.className = "messgeText";
        console.log(now_time.getTime);
        timeSpan.innerHTML = now_time.getFullYear() + "年" + now_time.getMonth() + "月" + now_time.getDate() + "日 " + now_time.getHours() + ":" + now_time.getMinutes() ;
        p.innerHTML = inputMessage.value;
        inputMessage.value = "";
    
        // 添加到页面中
        messageBox.appendChild(img);
        userP.appendChild(userLink);
        messageHead.appendChild(userP);
        messageHead.appendChild(timeSpan);
        messageBox.appendChild(messageHead);
        messgeText.appendChild(p);
        messageBox.appendChild(messgeText);
        messagesBox.appendChild(messageBox);
        content.appendChild(messagesBox);
        content.appendChild(footer);
    }
}