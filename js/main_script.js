// function BrowserType() {
//     var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

//     var isOpera = userAgent.indexOf("Opera") > -1;

//     var isEdge = userAgent.indexOf("Edge") > -1;

//     if (isEdge) {

//         return "Edge"

//     } //判断是否Opera浏览器

//     else if (userAgent.indexOf("Firefox") > -1) {

//         return "FF";

//     } //判断是否Firefox浏览器

//     else if (userAgent.indexOf("Chrome") > -1) {

//         return "Chrome";

//     }

//     else if (isOpera) {

//         return "Opera"

//     } //判断是否Opera浏览器


//     else if (userAgent.indexOf("Safari") > -1) {

//         return "Safari";

//     } //判断是否Safari浏览器

//     else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {

//         return "IE";

//     } //判断是否IE浏览器
//     else {
//         return "Others"
//     }

// }
// //以下是调用上面的函数

// var mb = BrowserType();



// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     alert("请在PC端使用Chrome或Firefox浏览本站！");
//     window.location.href = "about:blank";
// } else {
//     if (mb == "Chrome" || mb == "FF") {
//         ;
//     }
//     else {
//         alert("请使用Chrome或Firefox浏览本站！");
//         // window.location.href = "about:blan";
//     }
// }

$(document).ready(function () {
    
    // alert("恭喜你连接上了间隙中的服务器！");
    console.info('诶……你居然发现了通往间隙的入口\n好的，那，献上彩蛋的提示：\n绅士->间隙->紫的网页\n不是用中文哦');
    // $("#rgba").html(html.index);
    function GetQueryString(name){   
        var reg = new RegExp("(^|&)"+ name+"=([^&]*)(&|$)");     
        var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则     
        if(r!=null)return  unescape(r[2]); return null;
    }
    var myurl=GetQueryString("id");
    var w = document.body.clientWidth;
    var wt=w;
    var flag=false;
    var qflag=false;

    $("#qbtn").click(function(){
        if(!qflag){
            $("#questions").slideDown(1000);
            $("#qbtn").val("收回问卷");
            qflag=true;
        }
        else{
            $("#questions").slideUp(1000);
            $("#qbtn").val("打开问卷");
            qflag=false;
        }
    })

    $(window).scroll(function(event){
        w = document.body.clientWidth;
        var wScrollY = window.scrollY; // 当前滚动条位置  
        var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）  
        var bScrollH = document.body.scrollHeight; // 滚动条总高度
        if (w<=704 && wScrollY==0) {          
            $("#msg").slideDown();
        }
        else{
            $("#msg").slideUp();
        }
        if (wScrollY+wInnerH+10>=bScrollH) {          
            $("#p-m").slideDown();
        }
        else{
            $("#p-m").slideUp();
        }
    });
    $("#boku").mouseover(function () {
        $("#msg").slideDown();
    })
    $("#boku").mouseout(function () {
        $("#msg").slideUp();
    });

    $(window).resize(function(){
        w = document.body.clientWidth;
        if((w<=689 && wt >= 690)||(w>=690 && wt <= 689))
            flag=true;
        if(flag && w<=689){
            $("#p-m").html(m_background_id[myurl]);
            flag=false;
        }
        else if(flag &&w>=690){
            $("#p-m").html(background_id[myurl]);
            flag=false;
        }
        wt=w;
    })
    
    function changeIndex (id){
        $("#background-box").html(background[id]);
        $("#rgba").html(html[id]);
        $("#BGM-BOX").html(backgroundmusic[id]);
        w = document.body.clientWidth;
        if(w>=690){
            $("#p-m").html(background_id[id]);
        }
        else{
            $("#p-m").html(m_background_id[id]);
        }
    }

    if(myurl !=null && myurl.toString().length>1)
    {
        changeIndex(myurl);
    }
    
    $("#menuUl .pagebutton").click(function () {
        let id = $(this).attr("attr-id");
        changeIndex(id);
        window.history.replaceState({}, 0, 'http://' + window.location.host + '?id=' + id);
    })
}); 