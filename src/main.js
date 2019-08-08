import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import flexible from "flexible.js";
import fastClick from "fastclick";
import api from "./api";
// import axios from "axios";
import "./api/mock.js";
Vue.prototype.api = api;
Vue.config.productionTip = false;
// 1rem = 50px, 需要编辑器插件配置一下
flexible(750, 640);
// 消除300ms延迟
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
