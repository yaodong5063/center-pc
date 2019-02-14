<template lang="html">

   <div class="index">
     <my-header :index="'5'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/exhibition-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>展览</h3>
          <p>EXHIBITION</p>
        </div>
        <div class="bannerCom">
           <div class="bannerComL">
               <p>BC SHANGHAI年展</p>
               <span>区块链十年技术发展史</span>
           </div>
           <div class="bannerComR">
               <p>2019/01/28-2019/05/19</p>
           </div>
        </div>
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="education">
        <div class="educationI">
          <div class="educationTit">
            <h3>关于展览</h3>
          </div>
          <div class="educationText">
            <p>
                科技是最百搭的技术手段，它可以和任何人类的感知和情感做结合： 艺术、音乐、舞蹈、摄影……
            </p>
            <p>
                当各种人文文化被科技用不同的设计思维和设计风格去诠释的时候，就演变出了一种跨次元、跨文化领域的即视感，同时用更直观的感官语言重释人文文化。
            </p>
            <p>
                让科技颠覆，实现跃界。 科技即将成为一种有情感的文化。
            </p>
            <p>
              区块链科技中心不仅仅是科技人才和互联网爱好者的聚集地，更是文化人和有趣的人的聚集地。通过常态展、季度展、快闪展的呈现，丰富区块链科技中心的互动性，形成科技加艺术的展览模式，打造长期好玩有趣的科技文化中心。从环境上聚集科技爱好者，让更多的人透过艺术的媒介，了解背后的区块链科技。
            </p>
          </div>
          
        </div>
      </div>
      <div class="eBack">
         <div class="eBackCom">
             <div class="eBackComTit">
               <h3>展览回顾</h3>
             </div>
             <div class="eBackComText clear">
               <ul>
                 <li @click="d1=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic1_pc.jpg'" width="440" height="320" />
                   <h3>星际巴士</h3>
                   <p class="elDb">
                     区块链能否指引人类到往终极自由？
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Blockchain centre team
                     </span>
                   </div>
                 </li>
                 <li class="eBackComTextMid" @click="d2=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic2_pc.jpg'" width="440" height="320" />
                   <h3>蜂巢派对</h3>
                   <p class="elDb">
                     开启暗房之门，在概念影像和音乐的感染下随之起舞，感悟流转于区块链科技间的活力与魅力。
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Sencity & 马海平MHP
                     </span>
                   </div>
                 </li>
                 <li @click="d3=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic3_pc.jpg'" width="440" height="320" />
                   <h3>钻石之镜</h3>
                   <p class="elDb">
                     艺术互动装置如钻石切割的形状，无人时呈平面，激活时镜面展开，创造一个解构的自我反映。
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Mirage Makers
                     </span>
                   </div>
                 </li>
                 <li @click="d4=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic4_pc.jpg'" width="440" height="320" />
                   <h3>CSR展- 重见·未来</h3>
                   <p class="elDb">
                     探索孩子们眼中的未来和科技，为慈善发声，为明日科技助力。
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Blockchain centre team
                     </span>
                   </div>
                 </li>
                 <li class="eBackComTextMid" @click="d5=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic5_pc.jpg'" width="440" height="320" />
                   <h3>重见</h3>
                   <p class="elDb">
                     创作灵感起源于CSR展中孩子们缤纷多彩的艺术创作，用艺术创意与科技互动结合，展现科幻梦境的另一个维度的平行宇宙。
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Vivee Wei& Nakwi
                     </span>
                   </div>
                 </li>
                 <li @click="d6=true">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic6_pc.jpg'" width="440" height="320" />
                   <h3>楼梯星辰</h3>
                   <p class="elDb">
                     创造性的楼梯空间科技感设计，融入灯光编程，赋予未来感。
                   </p>
                   <div class="eBackComTextFont">
                     <span>
                       Mirage Makers
                     </span>
                   </div>
                 </li>
               </ul>
             </div>
         </div>
      </div>
      <div class="eBack">
         <div class="eBackCom">
             <div class="eBackComTit">
               <h3>更多展览现场展示</h3>
             </div>
             <div class="eBackLi clear">
                 <div class="scrolltop">
                  <ul>
                    <li v-for="item in imgArr">
                      <img :src="base.indexUrl+item" height="375" />
                      <div class="eBackLiBg"></div>
                    </li>
                    
                  </ul>
                </div>
             </div>
         </div>
      </div>
      <vue-dialog :databoll.sync="d1" :obj="obj1"></vue-dialog>
      <vue-dialog :databoll.sync="d2" :obj="obj2"></vue-dialog>
      <vue-dialog :databoll.sync="d3" :obj="obj3"></vue-dialog>
      <vue-dialog :databoll.sync="d4" :obj="obj4"></vue-dialog>
      <vue-dialog :databoll.sync="d5" :obj="obj5"></vue-dialog>
      <vue-dialog :databoll.sync="d6" :obj="obj6"></vue-dialog>
   </div>   
</template>	
<script> 
import dialog from './../component/dialog.vue'
export default {
  name:'index',
  data(){
  	return {
        english:this.$store.state.vLang.name,
        base:base,
        imgArr:['/img/www/ed2_1.jpg','/img/www/ed2_2.jpg','/img/www/ed6_1.jpg','/img/www/ed6_2.jpg','/img/www/ed6_3.jpg','/img/www/ed6_4.jpg','/img/www/ed6_5.jpg','/img/www/ed6_6.jpg','/img/www/ed1_1.jpg','/img/www/ed1_2.jpg','/img/www/ed5_1.jpg','/img/www/ed5_2.jpg','/img/www/ed5_3.jpg','/img/www/ed5_4.jpg','/img/www/ed3_1.jpg','/img/www/ed3_2.jpg','/img/www/ed3_3.jpg','/img/www/ed3_4.jpg','/img/www/ed3_5.jpg','/img/www/ed3_6.jpg','/img/www/CSR1.jpg','/img/www/CSR2.jpg','/img/www/CSR3.jpg','/img/www/CSR4.jpg','/img/www/CSR5.jpg','/img/www/CSR6.jpg','/img/www/CSR7.jpg','/img/www/CSR8.jpg','/img/www/CSR9.jpg','/img/www/CSR10.jpg','/img/www/CSR12.jpg','/img/www/CSR13.jpg','/img/www/CSR14.jpg','/img/www/CSR15.jpg','/img/www/CSR16.jpg','/img/www/edd1.jpg','/img/www/edd2.jpg'],
        d1:false,
        obj1:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ed1_1.jpg',
            title:'星际巴士带领大众探索并在感受信任机制经历由人际信任、制度信任到人机信任的发展动线，并在此基础上探讨区块链能否指引人类到往终极自由。'
          },{
            img:'/img/www/ed1_2.jpg',
            title:'星际巴士带领大众探索并在感受信任机制经历由人际信任、制度信任到人机信任的发展动线，并在此基础上探讨区块链能否指引人类到往终极自由。'
          },]
        },
        d2:false,
        obj2:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ed2_1.jpg',
            title:'利用变幻的光影记录彼此进入区块链时代的印记，将音符注入科技血液，打造浸入式的科技体验空间'
          },{
            img:'/img/www/ed2_2.jpg',
            title:'利用变幻的光影记录彼此进入区块链时代的印记，将音符注入科技血液，打造浸入式的科技体验空间'
          },]
        },
        d3:false,
        obj3:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ed3_1.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },{
            img:'/img/www/ed3_2.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },{
            img:'/img/www/ed3_3.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },{
            img:'/img/www/ed3_4.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },{
            img:'/img/www/ed3_5.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },{
            img:'/img/www/ed3_6.jpg',
            title:'拥抱科技，一切为人。所有科技的呈现都是人类自身的需求反射'
          },]
        },
        d4:false,
        obj4:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/CSR1.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR2.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR3.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR4.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR5.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR6.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR7.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR8.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR9.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR10.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR12.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR13.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR14.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR15.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },{
            img:'/img/www/CSR16.jpg',
            title:'区块链科技中心的慈善科技艺术展，艺术家带领民工子弟小学的孩子们共同运用色彩和想象力创造。'
          },]
        },
        d5:false,
        obj5:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ed5_1.jpg',
            title:'内心里的情感，双眸中的宇宙。展览运用丰富的表达形式、色彩和精神，展现了对虚无和宇宙虚空的观念的沉思。'
          },{
            img:'/img/www/ed5_2.jpg',
            title:'内心里的情感，双眸中的宇宙。展览运用丰富的表达形式、色彩和精神，展现了对虚无和宇宙虚空的观念的沉思。'
          },{
            img:'/img/www/ed5_3.jpg',
            title:'内心里的情感，双眸中的宇宙。展览运用丰富的表达形式、色彩和精神，展现了对虚无和宇宙虚空的观念的沉思。'
          },{
            img:'/img/www/ed5_4.jpg',
            title:'内心里的情感，双眸中的宇宙。展览运用丰富的表达形式、色彩和精神，展现了对虚无和宇宙虚空的观念的沉思。'
          },]
        },
        d6:false,
        obj6:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ed6_1.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },{
            img:'/img/www/ed6_2.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },{
            img:'/img/www/ed6_3.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },{
            img:'/img/www/ed6_4.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },{
            img:'/img/www/ed6_5.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },{
            img:'/img/www/ed6_6.jpg',
            title:'科技加艺术的完美融合，在区块链科技中心的每处设计中都有艺术家独具匠心的体现。'
          },]
        },

	  }
  },
  watch:{
  },
  components:{
	  'vue-dialog':dialog
  },
  mounted(){
    let _this=this;
    setTimeout(() => {
      _this.eduScroll();
    }, 1000);
     
  },
  computed: {
    
  },
  methods:{
    eduScroll(){
        $.fn.imgscroll = function(o){
          var defaults = {
            speed: 40,
            amount: 0,
            width: 1,
            dir: "left"
          };
          o = $.extend(defaults, o);
          
          return this.each(function(){
            var _li = $("li", this);
            _li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
            _li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
            _li.css({position: "relative", overflow: "hidden"}); //li
            if(o.dir == "left") _li.css({float: "left"});
            
            //初始大小
            var _li_size = 0;
            for(var i=0; i<_li.length; i++)
              _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
            
            //循环所需要的元素
            if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
            _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
            _li = $("li", this);

            //滚动
            var _li_scroll = 0;
            function goto(){
              _li_scroll += o.width;
              if(_li_scroll > _li_size)
              {
                _li_scroll = 0;
                _li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
                _li_scroll += o.width;
              }
                _li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
            }
            
            //开始
            var move = setInterval(function(){ goto(); }, o.speed);
            _li.parent().hover(function(){
              clearInterval(move);
            },function(){
              clearInterval(move);
              move = setInterval(function(){ goto(); }, o.speed);
            });
          });
        };
        let li=$('.scrolltop');
        let liA=li.find('li');
        for(let i=0;i<liA.length;i++){
          let h=liA.eq(i).width();
          liA.eq(i).css({
            width:h+'px'
          });
        }
        $(".scrolltop").imgscroll({
          speed: 40,    //图片滚动速度
          amount: 0,    //图片滚动过渡时间
          width: 1,     //图片滚动步数
          dir: "left"   // "left" 或 "up" 向左或向上滚动
        });    
    },
      
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 @import 'index.less'
</style>