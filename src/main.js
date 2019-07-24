import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import flexible from "flexible.js";
import fastClick from "fastclick";

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
