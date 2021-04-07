/*
 * @Author: your name
 * @Date: 2021-04-07 09:24:23
 * @LastEditTime: 2021-04-07 09:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AAAf:\Web前端开发\项目\jiguo_clone\qy133-jigup\js\gudi.js
 */

// 导购最新
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/new",
  success: function (result) {
    var arr1 = result[1].concat(result[2], result[3]);
    var tmpText = doT.template(
      document.getElementById("index-guid-list").innerText
    );
    document.getElementById("index-guid").innerHTML = tmpText(arr1);
  },
});

// 导购最热
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/play/hot",
  success: function (result) {
    var arr1 = result[1].concat(result[2], result[3]);
    var tmpText = doT.template(
      document.getElementById("guid-hot-list").innerText
    );
    document.getElementById("guid-hot").innerHTML = tmpText(arr1);
  },
});
