import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'summernote'
import 'summernote/dist/summernote.js'
import 'summernote/dist/summernote.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import InputTag from 'vue-input-tag'
import Paginate from 'vuejs-paginate'
import 'underscore'
import 'underscore/underscore.js'
import 'underscore/underscore-min.js'
Vue.component('paginate', Paginate)
Vue.component('input-tag', InputTag)
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
