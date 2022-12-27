import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/app.css'
import '@/permission'
import relativeTime from 'dayjs/plugin/relativeTime';
// 国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs');

// 相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance

import format from 'date-fns/format'

Vue.filter('date', (date) => {
  return format(new Date(date), 'yyyy-MM-dd')
})
Vue.prototype.dayjs = dayjs;//可以全局使用dayjs
Vue.use(Buefy)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
