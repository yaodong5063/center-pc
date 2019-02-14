const componentDom=[
  {
    name:'my-header',
    // 菜单
    props: ['index','lang'],
    template: `
    <div class="header">
      <div class="head clear">
         <div class="lang">
            <li v-for="item in lang.lang" @click="langClick(item)">{{item.name}}</li>
         </div>
         <div class="menu">
            <div class="logo">
                <img :src="base.indexUrl+'/img/www/web-toplogo_pc.png'" width="259" height="82" />
            </div>
            <div class="menuLi">
              <li v-for="item in lang.menu" :class="{liClick:(item.sort==index)}">
                  <a :href="item.url">
                    {{item.name}}
                  </a>
                  <label></label>
              </li>
            </div>
         </div>
      </div>
    </div>
    `,
    data(){
      return {
          base:base,
          
      }
    },
    watch:{
      
    },
    components:{
      
    },
    mounted(){
      
    },
    methods:{
      langClick(val){
        this.$store.commit('lang',lang[val.value]);
        base.cookie.set('lang',val.value,365);
      }
    }
  },
  {
    name:'my-footer',
    // 底部
    props: ['data'],
    template: `
      <div class="footer">
        <div class="footAbout">
          <label>关注我们:</label>
          <a href="https://twitter.com/BlockchainCSH" target="_blank"><img :src="base.indexUrl+'/img/www/web_twitter_pc.png'" /></a>
          <a href="https://weibo.com/6444471883/manage" target="_blank"><img :src="base.indexUrl+'/img/www/web-weibo_pc.png'" /></a>
          <a href="https://www.linkedin.com/company/14512059/admin/" target="_blank"><img :src="base.indexUrl+'/img/www/web-linkedin_pc.png'" /></a>
          <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4MjAyMjA1NA==&scene=124#wechat_redirect" target="_blank"><img :src="base.indexUrl+'/img/www/web-wechat_pc.png'" /></a>
        </div>
        <div class="footUs">
          <label>联系我们:</label>
          <span>COTACT@BLOCKCHAINCENTREGLOBAL.COM</span>
        </div>
        <div class="footMenu">
           <li v-for="item in data.menu">
             <a :href="item.url">{{item.name}}</a>
           </li>
        </div>
        <div class="footLogo">
           <img :src="base.indexUrl+'/img/www/web-bottomlogo_pc.png'" />
        </div>
      </div>
    `,
    data(){
      return {
          
          base:base,
          
      }
    },
    watch:{
      
    },
    mounted(){
      
      
    },
    methods:{
    }  
  },
];

const componentDoms={
  install(Vue) {
    componentDom.map(component => {
      Vue.component(component.name, component);
    });
  } 
}
module.exports=componentDoms;
 