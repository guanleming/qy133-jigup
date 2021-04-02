/*
 * @Author: AndyGao
 * @Date: 2021-03-15 10:27:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-15 19:31:41
 * @Description: file content
 * @FilePath: \code\6JavaScript\day10\animate.js
 */
/**
 * @description: 缓动动画函数
 * @param {object} element 要操作的元素对象
 * @param {int} target 目标位置
 * @param {function} callback 动画完成之后自动调用的函数
 * @param {int} speed 动画执行的速度
 * @Author: AndyGao
 * @Date: 2021-03-15 10:28:17
 * @Version: 1.0
 */
function animate(element, target, callback = null, speed = 20) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    // div1.style.left = "1000px"
    let left = element.offsetLeft;

    let step =
      target - left > 0
        ? Math.ceil((target - left) / 10)
        : Math.floor((target - left) / 10);

    if (left != target) {
      element.style.left = left + step + "px";
    } else {
      clearInterval(element.timer);
      callback && callback();
    }
  }, speed);
}
