import 'reflect-metadata'

import Vue from 'vue'
import App from './app.vue'
import TypeScriptDependencyInjection from '@dvolper/tsdi-vue'

Vue.config.productionTip = false

Vue.use(TypeScriptDependencyInjection)

new Vue({
    render: h => h(App)
}).$mount('#app')
