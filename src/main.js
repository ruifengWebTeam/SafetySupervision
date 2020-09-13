import Vue from 'vue'
<<<<<<< HEAD
import store from './store' 
=======
>>>>>>> 963e05e5888d8c07d3837ccf024e14db9d494590
import router from './router'
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import {
  Toast
} from 'vant';
<<<<<<< HEAD
Vue.prototype.$msg = Toast 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
import http from '../http' 
=======
Vue.prototype.$msg = Toast


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import http from '../http'

import store from './store'

>>>>>>> 963e05e5888d8c07d3837ccf024e14db9d494590

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
