/*
 * @Author: your name
 * @Date: 2021-04-07 09:35:42
 * @LastEditTime: 2021-04-07 09:50:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AAAf:\Web前端开发\项目\jiguo_clone\qy133-jigup\js\use.js
 */

// 大众试用-全部
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/public",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("use-index-list").innerText
    );
    document.getElementById("use-index").innerHTML = tmpText(result);
  },
});

// 大众试用-申请中
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/public",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("use-applying-list").innerText
    );
    document.getElementById("use-applying").innerHTML = tmpText(result);
  },
});

// 大众试用-试用中
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/public",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("use-trying-list").innerText
    );
    document.getElementById("use-trying").innerHTML = tmpText(result);
  },
});

// 大众试用-结束
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/public",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("use-finished-list").innerText
    );
    document.getElementById("use-finished").innerHTML = tmpText(result);
  },
});

// 体验师试用-结束
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/useing/master",
  success: function (result) {
    result = result.splice(0, 12);
    var tmpText = doT.template(
      document.getElementById("use-tys-list").innerText
    );
    document.getElementById("use-tys").innerHTML = tmpText(result);
  },
});
