/*
 * @Author: your name
 * @Date: 2021-04-07 09:53:28
 * @LastEditTime: 2021-04-07 10:22:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AAAf:\Web前端开发\项目\jiguo_clone\qy133-jigup\js\report.js
 */

// 报告最新
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/report/new",
  success: function (result) {
    var tmpText = doT.template(
      document.getElementById("index-report-list").innerText
    );
    document.getElementById("index-report").innerHTML = tmpText(result);
  },
});

// 报告最热
ajax({
  type: "get",
  url: "http://192.168.31.254:3000/report/hot",
  success: function (result) {
    console.log(result);
    var tmpText = doT.template(
      document.getElementById("hot-report-list").innerText
    );
    document.getElementById("hot-report").innerHTML = tmpText(result);
  },
});
