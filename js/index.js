/*
 * @Author: your name
 * @Date: 2021-04-02 14:51:29
 * @LastEditTime: 2021-04-07 08:37:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AAAf:\Web前端开发\项目\jiguo_clone\qy133-jigup\js\index.js
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

// 轮播图
let prev = document.querySelector(".show-prev img");
let next = document.querySelector(".show-next img");

let show = document.querySelector(".show-list");
// 阈值
let flag = true;
// 判断第几轮
let focus_index = 0;
// 轮播函数
function play(fu) {
  flag = false;
  //   如果轮播到最后四个，右侧按钮消失，反之，显现
  if (focus_index == 2) {
    document.querySelector(".show-next img").style.display = "none";
  } else if (focus_index == 0) {
    document.querySelector(".show-prev img").style.display = "none";
  } else {
    document.querySelector(".show-next img").style.display = "inline";
    document.querySelector(".show-prev img").style.display = "inline";
  }

  let left_num = fu * 281 * 4;
  animate(show, left_num, function () {
    flag = true;
  });
}

next.onclick = function () {
  if (flag) {
    focus_index++;
    play(-focus_index);

    console.log(focus_index);
  }
};

prev.onclick = function () {
  if (flag) {
    focus_index--;
    play(-focus_index);
    console.log(focus_index);
  }
};

// 点击加载更多

let more = document.querySelector(".more-click div");
let more_img = document.querySelector(".more-click img");

more.onclick = function () {
  more_img.src = "./img/loading-icon.gif";
};

/* 倒计时 */
function autoTime() {
  var time1 = new Date();
  var time2 = new Date("4 10,2021");
  var wait = time2.getTime() - time1.getTime();
  var date = parseInt(wait / 1000 / 60 / 60 / 24);
  var hour = parseInt((wait / 1000 / 60 / 60) % 24);
  var minute = parseInt((wait / 1000 / 60) % 60);
  var second = parseInt((wait / 1000) % 60);
  $("#countdown").html(
    date + "天" + hour + "时" + minute + "分" + second + "秒"
  );
}
setInterval(autoTime, 1000);

/* 倒计时 */
$(function () {
  $(".header-lunbo-time").fadeIn(1000);
});

// ---数据请求---

// 首页轮播图数据

ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/master",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("index-slide-list").innerText
    );
    document.getElementById("index-slide").innerHTML = tmpText(result);
  },
});

// 报告精选
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/new",
  success: function (result) {
    var tmpText = doT.template(
      document.getElementById("index-report-list").innerText
    );
    document.getElementById("index-report").innerHTML = tmpText(result[1]);
  },
});

// 导航精选
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/guid/new",
  success: function (result) {
    result = result.splice(0, 4);
    var tmpText = doT.template(
      document.getElementById("index-navigate-list").innerText
    );
    document.getElementById("index-navigate").innerHTML = tmpText(result);
  },
});

// 酷玩精选
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/hot",
  success: function (result) {
    console.log(result);
    var tmpText = doT.template(
      document.getElementById("index-play-list").innerText
    );
    document.getElementById("index-play").innerHTML = tmpText(result[1]);
  },
});
