import Vue from 'vue'
import Router from 'vue-router'
import main from '../main.vue'
import index from '../home/index.vue'
import education from '../education/index.vue'
import news from '../news/index.vue'
import detail from '../news/detail.vue'
import exhibition from '../exhibition/index.vue'
import events from '../events/index.vue'
import work from '../work/index.vue'
import about from '../about/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: main,
      redirect:'/index',
      children: [
            { path: '/index', name: 'index', component: index },
            { path: '/education', name: 'education', component: education },
            { path: '/news', name: 'news', component: news },
            { path: '/detail/:id', name: 'detail', component: detail },
            { path: '/exhibition', name: 'exhibition', component: exhibition },
            { path: '/events', name: 'events', component: events },
            { path: '/work', name: 'work', component: work },
            { path: '/about', name: 'about', component: about },
        ]
    }
  ]
});