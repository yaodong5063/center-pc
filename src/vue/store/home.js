import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const vLang={
  state:{
    name:(typeof base.cookie.get('lang')=='undefined' || !base.cookie.get('lang'))?lang['cn']:lang[base.cookie.get('lang')],
    loginCookie:JSON.parse(base.cookie.get('login'))||{id:''},
    bookEditView:true
  },
  mutations:{
    lang(state,name){
      state.name=name;
    },
    viewTo(state){
      state.bookEditView=true;
    },
    hideTo(state){
      state.bookEditView=false;
    },
  }
}

const store = new Vuex.Store({
    state: {
      
    },
    mutations: {
      

    },
    modules:{
      vLang
    }
  });

  export default store;