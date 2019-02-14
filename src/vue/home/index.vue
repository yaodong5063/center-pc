<template lang="html">

   <div class="index">
     <my-header :index="'0'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/home-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>欢迎来到区块链科技中心!</h3>
          <p>全球首个非盈利区块链知识中心</p>
        </div>
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/home-logopattern_pc.png'" width="645" height="710" />
      </div>
      <div class="indexCenter">
        <div class="indexCenterTit">
          <h3>BLOCKCHAIN CENTRE</h3>
        </div>
        <div class="indexCenterText">
          <p>
            Blockchain Centre 是全球首个非盈利区块链知识中心
          </p>
          <p>
            这里汇集了计算机爱好者、开发者、各行业企业家、互联网行业高管和优质技术人才，构建以教育为核心的区块链人才生态，致力于建立区块链技术人才的“黄埔军校”，促进国际交流合作，提升我国计算机区块链产业的国际影响力。
          </p>
          <p>
            Blockchain Centre 重视国际交流合作，引进优质区块链技术人才，提升我国计算机区块链产业的国际影响力，更好地构建我国区块链技术产业生态。
          </p>
          <p>
            目前，Blockchain Centre 已在澳大利亚、中国、美国、马来西亚、新加坡、阿联酋和立陶宛成立中心，2019年将在瑞士、日本、韩国、南非、芬兰和印度等国家建立中心。
          </p>
        </div>
        <div class="indexCenterTap">
           <div class="indexCenterTapCom">
             <h3>使命</h3>
             <p>
               构建以教育为核心的区块链人<br/>才生态
             </p>
             <p>
               致力于建立区块链技术人才的<br/>“黄埔军校”
             </p>
           </div>
           <div class="indexCenterTapCom">
             <h3>愿景</h3>
             <p>
               促进国际交流合作
             </p>
             <p>
               引进优质区块链技术人才
             </p>
             <p>
               提升计算机区块链产业的国际<br/>影响力
             </p>
           </div>
           <div class="indexCenterTapCom">
             <h3>定位</h3>
             <p>
               服务于全球区块链行业生<br/>态的系统平台
             </p>
             <p>
               普及区块链技术知识以及<br/>优质人才孵化
             </p>
           </div>
        </div>
        
      </div>
      <div class="indexTap">
          <div class="indexTaps">
              <div id="certify">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/1.png'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/2.png'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/3.png'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/4.png'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/5.png'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/6.jpg'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/7.jpg'" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/8.jpg'" />
                    </div>
                    
                  </div>
                </div>

                <img id="lun_left" @click="golun()" :src="base.indexUrl+'/img/www/left.png'" width="20" height="62" />
                <img id="lun_right" @click="golun()" :src="base.indexUrl+'/img/www/right.png'" width="20" height="62" />
              </div>

          </div>
      </div>
      <div class="indexWhat">
        <div class="indexWhatTit">
          <h3>WHAT DO WE DO</h3>
        </div>
        <div class="indexWhatText">
           <li>
             <div class="indexWhatTextImg"><img :src="base.indexUrl+'/img/www/home-icon1_pc.png'" width="82" height="79"/></div>
             <p>青年社区活动</p>
           </li>
           <li>
             <div class="indexWhatTextImg"><img :src="base.indexUrl+'/img/www/home-icon2_pc.png'" width="86" height="82"/></div>
             <p>教育和培训</p>
           </li>
           <li>
             <div class="indexWhatTextImg"><img :src="base.indexUrl+'/img/www/home-icon3_pc.png'" width="81" height="82"/></div>
             <p>人才库建</p>
           </li>
           <li>
             <div class="indexWhatTextImg"><img :src="base.indexUrl+'/img/www/home-icon4_pc.png'" width="86" height="86"/></div>
             <p>企业孵化</p>
           </li>
           <li>
             <div class="indexWhatTextImg"><img :src="base.indexUrl+'/img/www/home-icon5_pc.png'" width="83" height="56"/></div>
             <p>跨界合作</p>
           </li>
        </div>
      </div>
      <div class="indexFir">
         <div class="indexFirDom">
           <div class="indexFirDomTit">
              <h3>合作伙伴</h3>
           </div>
           <div class="indexFirDomText">
              <li>
                <img :src="base.indexUrl+'/img/www/partners_logo.png'" width="1258" height="246" />
              </li>
           </div>
         </div>
      </div>
   </div>
</template>	
<script>
import Swiper from 'swiper'; 
export default {
  name:'index',
  data(){
  	return {
        english:this.$store.state.vLang.name,
        lun_timer:null,
        lun_delay:3000,
        base:base,
        
	  }
  },
  watch:{
  	english(){
        //语言版本动态切换
        
        
    },
  },
  mounted(){
    this.taps();
     
  },
  computed: {
    
  },
  methods:{
    golun() {
        clearInterval(this.lun_timer);
        this.lun_timer = setInterval(function () {
            if (true) {
                $('#lun_right').trigger('click')
            }
        }, this.lun_delay)
    },
    taps(){
      let _this=this;
      new Swiper('#certify .swiper-container', {
          watchSlidesProgress: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          loopedSlides: 8,
          autoplay: {
              delay: _this.lun_delay
          },
          navigation: {
              nextEl: '#lun_right',
              prevEl: '#lun_left',
          },

          on: {
              progress: function (progress) {
                  for (let i = 0; i < this.slides.length; i++) {
                      var slide = this.slides.eq(i);
                      var slideProgress = this.slides[i].progress;
                      let modify = 1;
                      if (Math.abs(slideProgress) > 1) {
                          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                      }
                      let translate = slideProgress * modify * 260 + 'px';
                      let scale = 1 - Math.abs(slideProgress) / 5;
                      let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                      slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                      slide.css('zIndex', zIndex);
                      slide.css('opacity', 1);
                      if (Math.abs(slideProgress) > 3) {
                          slide.css('opacity', 0);
                      }
                  }
              },
              setTransition: function (transition) {
                  for (let i = 0; i < this.slides.length; i++) {
                      let slide = this.slides.eq(i)
                      slide.transition(transition);
                  }

              }
          }
      })

    },
    bookAjax(){
            
    },
      
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 @import 'index.less'
</style>