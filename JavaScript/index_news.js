window.onload = function() {

    // let url = "../JavaScript/news_data.json";
    let url = "http://wuyibaizhi.com/d/AlistDisk/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8/UserDisk/%E6%97%A0%E6%84%8F%E7%99%BD%E7%BA%B8/Data/news_data.json";
    let request = new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            let data = JSON.parse(request.responseText);
            // console.log(data);
            console.log(data.length);
            for(let i = 0; i < data.length; i++) {
                let New_log_img = data[i].New_log_img;
                let New_Title = data[i].New_Title;
                let New_P_list = data[i].New_P_list
                let New_Time = data[i].New_Time
                let New_link = data[i].New_link
                // console.log(messageText);
                initNews(New_log_img, New_Title, New_P_list, New_link, New_Time);
            }

        }
        
    }

    function initNews(imgSrc, title, TextList, link, dayTime) {
        let New_log = document.querySelector(".New_log");
        let New_log_box = document.createElement('div');
        New_log_box.className = 'New_log_box';
        let news_img = document.createElement('img');
        
        let h1 = document.createElement('h1');

        let a = document.createElement('a');
        let p = document.createElement('p');
        let day = document.createElement('p');


        // 设置参数
        news_img.src = imgSrc;
        h1.appendChild(document.createTextNode(title));
        p.appendChild(document.createTextNode(TextList));
        a.href = link;
        a.text = "点击查看全文";
        p.appendChild(a);
        day.className = "day"
        day.appendChild(document.createTextNode(dayTime));
        // 渲染
        New_log_box.appendChild(news_img)
        New_log_box.appendChild(h1)
        p.appendChild(a)
        New_log_box.appendChild(p);
        New_log_box.appendChild(day);
        New_log.appendChild(New_log_box)
    }
}