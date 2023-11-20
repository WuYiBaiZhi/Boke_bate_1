window.onload = function() {
    var content = document.getElementById("content");
    var upDataButton = document.getElementById("upDataMessage");
    upDataButton.onclick = upData;
    function upData () {
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
        inputUserName.value = ""
        timeSpan.className = "messageTime";
        messgeText.className = "messgeText";
        timeSpan.innerHTML = 121;
        p.innerHTML = inputMessage.value;
        inputMessage.value = "";
    
        
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