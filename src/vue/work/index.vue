<template lang="html">

   <div class="index">
     <my-header :index="'3'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/co-working-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>联合办公</h3>
          <p>CO-WORKING</p>
        </div>
      </div>
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="education">
        <div class="educationI">
          <div class="educationTit">
            <h3>联合办公</h3>
          </div>
          <div class="educationText">
            <p>
                为更好的孵化优质项目和培养人才，区块链科技中心开放联合办公板块。
            </p>
            <p>
                对内容匹配的初创企业和团队进行办公及活动场地支持，资源支持以及运营支持。自区块链科技中心2014年建立以来，成功孵化项目包括用于能源的Power Ledger、与农业相连的BlokchGrain、教育、音乐版权分享、会计应用、以及NEM基金会交易所等。
            </p>
          </div>
          
        </div>
      </div>
      <div class="work">
        <div class="workCom">
          <div class="workComImg">
            <img :src="base.indexUrl+'/img/www/co-working-bgpattern_pc.png'" width="1054" height="1160"/>
          </div>
          <div class="workComs">
            <div class="workComsTit">
              <h3>联合办公空间展示</h3>
              <p><img :src="base.indexUrl+'/img/www/co-working-1f_pc.png'" width="120" height="50"/></p>
            </div>
            <div class="workComsText">
               <li>
                 <img :src="base.indexUrl+'/img/www/co-working-pic1_pc.png'" width="431" height="361"/>
                 <p>一楼活动大厅</p>
               </li>
               <li>
                 <img :src="base.indexUrl+'/img/www/co-working-pic2_pc.png'" width="431" height="361"/>
                 <p>一楼大厅一角</p>
               </li>
            </div>
            <div class="workComsBg"></div>
          </div>
          <div class="workComs workComsTwo">
            <div class="workComsTit">
              <p><img :src="base.indexUrl+'/img/www/co-working-2f_pc.png'" width="120" height="50"/></p>
            </div>
            <div class="workComsTexts">
               <li>
                 <img :src="base.indexUrl+'/img/www/co-working-pic3_pc.png'" width="431" height="361"/>
                 <p>签到留影平台处</p>
               </li>
               <li>
                 <img :src="base.indexUrl+'/img/www/co-working-pic4_pc.png'" width="431" height="361"/>
                 <p>会议室</p>
               </li>
               <li>
                 <img :src="base.indexUrl+'/img/www/co-working-pic5_pc.png'" width="431" height="361"/>
                 <p>活动培训空间</p>
               </li>
            </div>
            <div class="workComsBg"></div>
          </div>
          <div class="workSwiper">
            <div class="workSwiperTit">
              <h3>
                活动及培训现场照片
              </h3>
            </div>
            <div class="workSwiperCom">
               <div id="certify1">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w1.jpg'" width="540" height="400" />
                    </div>
                   <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w2.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w3.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w4.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w5.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w6.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w7.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w8.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w9.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w10.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w11.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w12.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w13.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w14.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w15.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w16.jpg'" width="540" height="400" />
                    </div>
                    <div class="swiper-slide">
                      <img :src="base.indexUrl+'/img/www/w17.jpg'" width="540" height="400" />
                    </div>
                    
                  </div>
                </div>

                <img id="lun_left1" @click="golun()" :src="base.indexUrl+'/img/www/left.png'" width="20" height="62" />
                <img id="lun_right1" @click="golun()" :src="base.indexUrl+'/img/www/right.png'" width="20" height="62" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="indexFir">
         <div class="indexFirDom">
           <div class="indexFirDomTit">
              <h3>联合办公模式</h3>
              <p>上海区域链技术中心</p>
           </div>
           <div class="indexFirDomText">
              <div class="indexFirDomTextOne">
                <img :src="base.indexUrl+'/img/www/co-working-circle1_pc.png'" width="163" height="163" />
                <div class="indexFirDomTextCom">
                  <p>
                    <span>展览</span>
                  </p>
                  <p>
                    <span>PR</span>
                  </p>
                  <p>
                    <span>活动</span>
                  </p>
                </div>
              </div>
              <div class="indexFirDomTextTwo">
                <img :src="base.indexUrl+'/img/www/co-working-circle3_pc.png'" width="163" height="163" />
                <div class="indexFirDomTextCom">
                  <p>
                    <span>PR</span>
                  </p>
                </div>
              </div>
              
              <div class="indexFirDomTextThree">
                <img :src="base.indexUrl+'/img/www/co-working-circle2_pc.png'" width="163" height="163" />
                <div class="indexFirDomTextCom">
                  <p>
                    <span>培训</span>
                    <span>活动</span>
                  </p>
                  <p>
                    <span>会议</span>
                    <span>派对</span>
                  </p>
                </div>
              </div>
              <div class="indexFirDomTextFour">
                <img :src="base.indexUrl+'/img/www/co-working-circle4_pc.png'" width="163" height="163" />
                <div class="indexFirDomTextCom">
                  <p>
                    <span>PR</span>
                  </p>
                </div>
              </div>
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
                $('#lun_right1').trigger('click')
            }
        }, this.lun_delay)
    },
    taps(){
      let _this=this;
      new Swiper('#certify1 .swiper-container', {
          watchSlidesProgress: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          loopedSlides: 17,
          autoplay: {
              delay: _this.lun_delay
          },
          navigation: {
              nextEl: '#lun_right1',
              prevEl: '#lun_left1',
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