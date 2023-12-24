window.onload = function() {
    var content = document.getElementById("content");
    var upDataButton = document.getElementById("upDataMessage");
    upDataButton.onclick = upData;
    let url = "../JavaScript/message.json";
    let request = new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            let data = JSON.parse(request.responseText);
            // console.log(data);
            console.log(data.length);
            for(let i = 0; i < data.length; i++) {
                let userName = data[i].user.userName
                let userImg = data[i].user.userImg
                let userLink = data[i].user.userLink
                let messageTime = data[i].message.messageTime
                let messageText = data[i].message.messageText
                // console.log(messageText);
                initData(userName, userImg,userLink, messageTime, messageText)
            }

        }
        
    }
    function initData (userName, userImg, userLinkText, messageTime, messageText) {
        // 获取或创建元素
        let messagesBox = document.createElement("div");
        let messageBox = document.createElement("div");
        let img = document.createElement("img");
        let messageHead = document.createElement("div");
        let userP = document.createElement("p");
        let userLink = document.createElement("a");
        let footer = document.createElement("footer");
        let timeSpan = document.createElement("span");
        let messgeText = document.createElement("div");
        //添加参数
        if(userName != '') {
            userLink.text = userName;
        } else {
            userLink.text = "匿名用户";
        }
        img.src = userImg;
        img.alt = "userImg"
        messagesBox.className = "messagesBox";
        messageBox.className = "messageBox";
        messageHead.className = "messageHeader";
        userP.className = "user";
        userLink.href = userLinkText;
        // console.log(userLink);
        timeSpan.className = "messageTime";
        messgeText.className = "messgeText";
        // console.log(now_time.getTime);
        timeSpan.innerHTML = messageTime;
        
    
        // 添加到页面中
        messageBox.appendChild(img);
        userP.appendChild(userLink);
        messageHead.appendChild(userP);
        messageHead.appendChild(timeSpan);
        messageBox.appendChild(messageHead);
        for(let i = 0;i < messageText.length; i++) {
            let p = document.createElement("p");
            TextNode = document.createTextNode(messageText[i]);
            p.appendChild(TextNode);
            messgeText.appendChild(p);
        }
        messageBox.appendChild(messgeText);
        messagesBox.appendChild(messageBox);
        content.appendChild(messagesBox);
        content.appendChild(footer);
    }
    function upData () {
        // 获取或创建元素
        let inputUserName = document.getElementById("inputUserName");
        let inputMessage = document.getElementById("inputMessage");
        let messagesBox = document.createElement("div");
        let messageBox = document.createElement("div");
        let img = document.createElement("img");
        let messageHead = document.createElement("div");
        let userP = document.createElement("p");
        let userLink = document.createElement("a");
        let footer = document.createElement("footer");
        let p = document.createElement("p");
        let timeSpan = document.createElement("span");
        let messgeText = document.createElement("div");
        let now_time = new Date();
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