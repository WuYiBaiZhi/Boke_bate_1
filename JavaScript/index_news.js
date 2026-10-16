window.onload = function () {
    // 注意：如果页面是 https，这里必须也用 https，否则会被浏览器拦截
    let url = "../JavaScript/news_data.json";
    // let url = "https://wuyibaizhi.com/d/AlistDisk/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8/UserDisk/%E6%97%A0%E6%84%8F%E7%99%BD%E7%BA%B8/Data/news_data.json";

    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);

    request.onload = function () {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data.length);
            let fragment = document.createDocumentFragment(); // 可选优化
            for (let i = 0; i < data.length; i++) {
                let New_log_img = data[i].New_log_img;
                let New_Title = data[i].New_Title;
                let New_P_list = data[i].New_P_list;
                let New_Time = data[i].New_Time;
                let New_link = data[i].New_link;
                initNews(New_log_img, New_Title, New_P_list, New_link, New_Time, fragment);
            }
            document.querySelector(".New_log").appendChild(fragment);
        } else {
            console.error("请求失败，状态码：" + request.status);
        }
    };

    request.onerror = function () {
        console.error("网络请求出错");
    };

    function initNews(imgSrc, title, TextList, link, dayTime, parentFragment) {
        let New_log = document.querySelector(".New_log");
        let New_log_box = document.createElement('div');
        New_log_box.className = 'New_log_box';

        let news_img = document.createElement('img');
        news_img.src = imgSrc;

        let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(title));

        let a = document.createElement('a');
        a.href = link;
        a.textContent = "点击查看全文";

        let p = document.createElement('p');
        p.appendChild(document.createTextNode(TextList));
        p.appendChild(a);

        let day = document.createElement('p');
        day.className = "day";
        day.appendChild(document.createTextNode(dayTime));

        New_log_box.appendChild(news_img);
        New_log_box.appendChild(h1);
        New_log_box.appendChild(p);
        New_log_box.appendChild(day);

        if (parentFragment) {
            parentFragment.appendChild(New_log_box);
        } else {
            New_log.appendChild(New_log_box);
        }
    }
};