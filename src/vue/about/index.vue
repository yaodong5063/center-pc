<template lang="html">

   <div class="index">
     <my-header :index="'6'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/aboutus-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>关于我们</h3>
          <p>ABOUT US</p>
        </div>
        
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="about">
        <div class="aboutTit">
          <h3>
            关于我们
          </h3>
        </div>
        <div class="aboutText">
          <p>
            区块链科技中心建立于2014成立于澳洲墨尔本。 从成立之日起，就致力于教育，展览、项目孵化与线下活动。
          </p>
          <p>
            区块链科技中心与各大高校联手，汇聚师资，面对不同层级的需求，研发了不同类型的教育课程：针对知识扫盲型人群的基础线上课程，针对有一定知识储备的短期课程，以及针对行业内人群的高阶浓缩课程。
          </p>
          <p>
            选用艺术作为媒介是我们的特色。艺术的直观与感染力，有效的缩短了大众与区块链中心之间的距离。通过艺术家的诠释，科技的表达变得多样。
          </p>
          <p>
            持续不断的社区活动也是中心的亮点。通过跨界大咖分享论坛，嘉宾话题分享和学员互动，分享行业知识，跨界互动学习。 Shine ON更是区块链科技中心发起的公益慈善项目。
          </p>
          <p>
            依托丰富的线下活动，教育以及科技艺术展，区块链中心助力区块链青年社群，为业内新锐产品Tachion、Virgo、Ruden及CoinMerit发声。
          </p>
          <p>
            作为全球首个非营利性的区块链知识教育普及中心，我们期待联合全球资源，与大家共同创造璀璨明天！
          </p>
        </div>
      </div>
      <div class="aboutTeam">
        <div class="aboutTeamC">
          <div class="aboutLayla aboutsCom">
             <div class="aboutsTit">
               <h3>
                 <div class="aboutsTitP">
                   <p>创始人</p>
                   <p>首席执行官</p>
                 </div>
                 <span></span>
               </h3>
             </div>
             <div class="aboutsText">
               <img :src="base.indexUrl+'/img/www/aboutus-layla_pc-18.jpg'" width="236" height="236"/>
               <h5>Layla Dong</h5>
               <p>
                  带领团队完成日本上市公司Path Corporation（TYO：3840）的收购及十余家区块链项目的投资，累计投资金额1800万美金。全球首个非盈利区块链中心BlockchainCentre的董事及Blockchain Global媒体顾问。2016年起担任世界经济论坛全球杰出青年社区董事会成员。
               </p>
             </div>
          </div>
          <div class="aboutLayla aboutsCom">
             <div class="aboutsTit">
               <h3>
                 <div class="aboutsTitP">
                  <p>独立董事</p>
                 </div>
                 <span></span>
               </h3>
             </div>
             <div class="aboutsText">
               <img :src="base.indexUrl+'/img/www/aboutus-sam_pc-19.jpg'" width="236" height="236"/>
               <h5>Sam Lee</h5>
               <p>
                  2014年创立在澳大利亚创立Blockchain Global，带领公司完成了八十余项项目孵化和投资，旗下控股多家上市公司，投资总值超过3亿美金，布局澳大利亚、美国、中国、马来西亚、瑞士、日本、立陶宛等国家。同年创立全球首个非营利性区块链中心Blockchain Centre。
               </p>
             </div>
          </div>
        </div>
      </div>
      <div class="newsWord">
        <div class="newsWordCom">
          <div class="newsWordTit">
            <h3>
                区块链科技中心全球分布
            </h3>
            <p>
             更新至2019-01-27
            </p>
          </div>
          <div class="newsWordText">
            <img :src="base.indexUrl+'/img/www/map-23.jpg'" width="1232"/>
          </div>
        </div>  
      </div>
      <div class="newsCenter">
        <div class="newsCenterCom">
          <div class="newsCenterTit">
            <img :src="base.indexUrl+'/img/www/news-greenlogo_pc.png'">
          </div>
          <div class="newsCenterText">
            <img :src="base.indexUrl+'/img/www/news-gobalbc_pc.png'" width="853"/>
          </div>
        </div>  
      </div>
      
   </div>   
</template>	
<script> 

export default {
  name:'index',
  data(){
  	return {
        english:this.$store.state.vLang.name,
        base:base,

	  }
  },
  watch:{
  },
  components:{
	  
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