import Vue from 'vue'
import App from './App.vue'

const Login={template:'<div>호</div>'}

const routes={
  '/':App,
  '/login':Login
}

new Vue({
  el: '#app',
  computed:{
    vueComponent(){
      return routes[window.location.pathname] ||
      {template: '<div>404 not found</div>'}
    }
  },
  render(h){
    return h(this.vueComponent)
  }
})
