
import Vue from 'vue';
import App from './../vue/home.vue'
import componentDoms from './commonDom'
import router from './../vue/router/router';
import store from './../vue/store/home';
Vue.config.productionTip = false
Vue.use(componentDoms);
router.beforeEach((to, from, next) =>{
  //判断路由是否正确
  if(!!to.name){
    next()
  }else{
    next({name:'index'});
  }
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
