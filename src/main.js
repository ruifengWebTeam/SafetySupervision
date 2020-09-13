import Vue from 'vue'

import store from './store' 

import router from './router'
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import {
  Toast
} from 'vant';

Vue.prototype.$msg = Toast 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
import http from '../http' 


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


Vue.prototype.$http = http

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
