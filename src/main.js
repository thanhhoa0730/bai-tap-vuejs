import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'summernote'
import 'summernote/dist/summernote.js'
import 'summernote/dist/summernote.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Main from './Main.vue'
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
