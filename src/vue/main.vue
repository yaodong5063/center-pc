<template>
	<div id="template">
	    <!--菜单-->
		<!--主页-->
		<div class="contain clear">
            <transition>
                <router-view/>
            </transition> 
		</div>
		<!--底部-->
		<my-footer :data="english.common.footer"></my-footer>
	</div>
</template>	
<script>
export default {
  name:'App',
  data(){
  	return {
        english:this.$store.state.vLang.name,
        sort:0,
	  }
  },
  watch:{
    '$route.name'(){
      
    }
  },
  mounted(){
     
  },
  methods:{   
    cookieLang(lg){
        if(!!lg){
           this.english=lang[lg];
        }
        this.$store.commit('lang',lang[lg]);
        
    },
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>