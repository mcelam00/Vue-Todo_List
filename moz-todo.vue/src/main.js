import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')//esto es el App.vue que es la componente de mas alto nivel de donde cuelga todo (es un diseño basado en componentes)
//LO QUE QUIERE DECIR ES QUE DE PUBLIC, EN EL INDEX.HTML La que tiene ID app es el punto donde se incrusta el App.vue