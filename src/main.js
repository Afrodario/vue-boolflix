import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

library.add(faStar)
library.add(faBan)
library.add(faUserSecret)
library.add(faCirclePlay)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
 
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
