/*
 * @Author: your name
 * @Date: 2021-04-04 13:57:36
 * @LastEditTime: 2021-04-05 13:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AAAf:\Web前端开发\项目\jiguo_clone\qy133-jigup\js\play.js
 */
//点击登录让遮罩层显示 登录框显示
$(".clk-login").click(function () {
  $(".login-zz, .login").fadeIn(1000);
});
$("#closeOff").click(function () {
  $(".login-zz, .login").fadeOut(1000);
});

$(".header-list>ul>li").click(function () {
  // console.log(11)
  // console.log(this)

  $(this).addClass("active").siblings().removeClass("active");
});

$(".shoye").click(function () {
  console.log(111);
  $.get(
    "http://192.168.31.254:3000/useing/public",
    {},

    function (data) {
      console.log(data);
    }
  );
});

// 点击加载更多

let more = document.querySelector(".more-click div");
let more_img = document.querySelector(".more-click img");

more.onclick = function () {
  more_img.src = "../img/loading-icon.gif";
};
