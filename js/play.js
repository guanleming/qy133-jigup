/*
 * @Author: your name
 * @Date: 2021-04-04 13:57:36
 * @LastEditTime: 2021-04-07 10:24:06
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

// 返回顶部
document.querySelector(".top").onclick = function () {
  let timer = setInterval(function () {
    // 当前位置
    let sTop = document.documentElement.scrollTop;

    // 步长
    let step = Math.ceil(sTop / 5);

    // console.log(sTop);
    // console.log(step)
    if (sTop != 0) {
      document.documentElement.scrollTop = sTop - step;
    } else {
      clearInterval(timer);
    }
  }, 50);

  // document.documentElement.scrollTop = 0;
};

// 酷玩最新
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/new",
  success: function (result) {
    // 使用concat()方法生成了一个新的数组，(不改变原来的数组)
    var arr1 = result[0].concat(result[1], result[2]);

    var tmpText = doT.template(
      document.getElementById("play-index-date-list").innerText
    );

    document.getElementById("play-index-date").innerHTML = tmpText(arr1);
  },
});

// 酷玩最热
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/hot",
  success: function (result) {
    // 使用concat()方法生成了一个新的数组，(不改变原来的数组)
    var arr1 = result[1].concat(result[2], result[3]);

    var tmpText = doT.template(
      document.getElementById("play-hot-date-list").innerText
    );
    document.getElementById("play-hot-date").innerHTML = tmpText(arr1);
  },
});
