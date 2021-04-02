/*
 * @Author: your name
 * @Date: 2021-04-02 14:51:29
 * @LastEditTime: 2021-04-02 14:58:44
 * @LastEditors: your name
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

let prev = document.querySelector(".show-prev img");
let next = document.querySelector(".show-next img");

let show = document.querySelector(".show-list");
// 用于获取宽度和判断轮播次数
let show_item = document.querySelectorAll(".show-item");
// 阈值
let flag = true;
// 判断第几轮
let focus_index = 0;
// 轮播函数
function play(fu) {
  flag = false;
  let left_num = -fu * (show_item[0].offsetWidth + 44) * focus_index * 4;

  //   如果轮播到最后四个，右侧按钮消失，反之，显现
  if (focus_index == show_item.length / 4 - 1) {
    next.style.display = "none";
  } else if (focus_index == 0) {
    prev.style.display = "none";
  } else {
    next.style.display = "";
    prev.style.display = "";
  }

  animate(show, left_num, function () {
    flag = true;
  });
}

next.onclick = function () {
  if (flag) {
    focus_index++;
    play(1);
  }
};

prev.onclick = function () {
  if (flag) {
    focus_index--;
    play(-1);
  }
};
