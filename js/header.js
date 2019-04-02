$(function(){
    //1.发送ajax请求,获取header.html里的<header>片段
    $.ajax({
        url:"header.html",
        type:"get",
        // 将片段替换到当前页面上的<header>里
        success:function(header){
            $(header).replaceAll("header")   //元素选择器,找到页面的header
            //动态创建link元素
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("header")
        }
    })
})