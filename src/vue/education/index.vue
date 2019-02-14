<template lang="html">

   <div class="index">
     <my-header :index="'4'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/education-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>课程</h3>
          <p>EDUCATION</p>
        </div>
        <div class="bannerCom">
           <div class="bannerComL">
               <p>在线试听</p>
               <span>《区块链三十六计》课程</span>
           </div>
           <div class="bannerComR">
               <a href="javascript:void(0)">LEARN MORE</a>
           </div>
        </div>
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="education">
        <div class="educationI">
          <div class="educationTit">
            <h3>关于课程</h3>
          </div>
          <div class="educationText">
            <p>
                区块链技术中心致力于全球范围区块链知识的教育与普及。早在2014年，创始人 Sam Lee就将巴士开进社区，向孩子们解释什么是区块链。在区块链相关术语充斥大街小巷的今天，对区块链技术本质的了解和认知显得尤为重要。如何让全世界更多的人了解和接纳区块链技术，是区块链技术中心的使命。经过精心研究，区块链技术中心针对基础不同的受众人群开发了3类不同的课程。
            </p>
          </div>
          <div class="educationBorder">
            <div class="educationTh"></div>
            <div class="educationTh"></div>
            <div class="educationTh"></div>
          </div>
        </div>
      </div>
      <div class="eTap">
        <div class="eTapCom">
          <div class="eTapComTit">
            <h3>基础课程</h3>
          </div>
          <div class="eTapComText">
            <p>
              对于区块链入门者，区块链技术中心课程团队精心打造的线上音频课程《区块链36计》。通过每节3-5分钟风趣易懂的短音频，解释清楚区块链行业的基础名词，适用于零基础的对区块链行业有兴趣的入门级人群。
            </p>
          </div>
        </div>
        <div class="eTapCom">
          <div class="eTapComTit">
            <h3>进阶课程</h3>
          </div>
          <div class="eTapComText">
            <p>
              对于想要系统学习区块链的人群，区块链技术中心与上海交通大学、上海科技大学合作开发了进阶课程，并出具非学历证书。以每周1天共8周的线下授课的形式，打磨专业技能，扎实走入区块链行业。
            </p>
          </div>
        </div>
        <div class="eTapCom">
          <div class="eTapComTit">
            <h3>高阶营</h3>
          </div>
          <div class="eTapComText">
            <p>
              针对企业家、学者、政府领导等高阶人士，区块链技术中心开发了1-5天不等的高阶营。与区块链行业资深讲师、开发人员面对面交流，通过一系列精心设计的沉浸式体验互动，掌握行业动向及政策走向。国际各地区块链技术中心相互合作，不定期推出国际营，带领区块链技术中心社群了解其他国家的区块链行业发展及最新资讯。
            </p>
          </div>
        </div>
      </div>
      <div class="etip">
        <div class="etipCom">
          <img :src="base.indexUrl+'/img/www/education-pic1_pc.jpg'" />
          <button @click="popTabBoll=true">查看更多</button>
        </div>
        <div class="etipCom">
          <img :src="base.indexUrl+'/img/www/education-pic2_pc.jpg'" />
          <button @click="popTabBoll1=true">查看更多</button>
        </div>
        <div class="etipCom">
          <img :src="base.indexUrl+'/img/www/education-pic3_pc.jpg'" />
          <button @click="popTabBoll2=true">查看更多</button>
        </div>
      </div>
      <vue-dialog :databoll.sync="popTabBoll" :obj="obj"></vue-dialog>
      <vue-dialog :databoll.sync="popTabBoll1" :obj="obj1"></vue-dialog>
      <vue-dialog :databoll.sync="popTabBoll2" :obj="obj2"></vue-dialog>
      
   </div>   
</template>	
<script> 
import dialog from './../component/dialog.vue'
export default {
  name:'index',
  data(){
  	return {
        english:this.$store.state.vLang.name,
        popTabBoll:false,
        base:base,
        obj:{
          title:'标题11',
          bgBol:true,
          titBol:true,
          arr:[{img:'/img/www/4.png',title:''},{img:'/img/www/5.png',title:''},{img:'/img/www/6.jpg',title:''}],
        },
        popTabBoll1:false,
        obj1:{
          title:'标题11',
          bgBol:true,
          titBol:true,
          arr:[{img:'/img/www/1.png',title:''},{img:'/img/www/2.png',title:''},{img:'/img/www/3.png',title:''}],
        },
        popTabBoll2:false,
        obj2:{
          title:'标题11',
          bgBol:true,
          titBol:true,
          arr:[{img:'/img/www/4.png',title:''},{img:'/img/www/5.png',title:''},{img:'/img/www/6.jpg',title:''}],
        },

	  }
  },
  watch:{
  },
  components:{
	  'vue-dialog':dialog
  },
  mounted(){
    
     
  },
  computed: {
    
  },
  methods:{
    bookAjax(){
            
    },
      
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 @import 'index.less'
</style>