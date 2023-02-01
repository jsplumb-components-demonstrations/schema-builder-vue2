import Vue from 'vue'
import App from './App.vue'
import { JsPlumbComponentsSchemaVue2Plugin } from '@jsplumb-components/schema-vue2'

Vue.config.productionTip = false

// import component plugin
Vue.use(JsPlumbComponentsSchemaVue2Plugin)

new Vue({ render: h => h(App) }).$mount('#app')

