import Vue from 'vue'
// import Youtube from 'vue-youtube'
import store from '@/store/store'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {sync} from 'vuex-router-sync'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import panel from "@/components/PanelView.vue"

Vue.config.productionTip = false
sync(store, router)
Vue.component('panel-view', panel)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
