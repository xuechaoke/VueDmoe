/**
 * 入口Js ：创建vue实例
 */
import Vue from 'vue'
//修改为App或App2 即可换Demo, 试试
import App from './App'
import router from './router'

new Vue({
  el: "#app",
  components: {App},
  template: "<App/>",
  router
});
