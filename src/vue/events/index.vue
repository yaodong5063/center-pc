<template lang="html">

   <div class="index">
     <my-header :index="'2'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/events-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>活动</h3>
          <p>EVENT</p>
        </div>
        <div class="bannerCom">
           <div class="bannerComL">
               <p>最新活动</p>
               <span>TACHION 日本文化与区块链技术创新</span>
           </div>
           <div class="bannerComR">
               <p>2019/03/01</p>
           </div>
        </div>
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="education">
        <div class="educationI">
          <div class="educationTit">
            <h3>关于活动</h3>
          </div>
          <div class="educationText">
            <p>
                区块链科技中心从2013年开始，每月举办社群活动，并逐步在全球变成固定频次的线下活动。
            </p>
            <p>
                活动团队精心打造社区活动模块，汇集计算机爱好者，开发者，各行业企业家，互联网行业高管，各行业优质技术人才，活动氛围轻松愉悦，学习气氛高涨，探讨孵化初创项目及各方合作。区块链科技中心也与各大高校定期双向交流互动，承办高校科技类交流活动组织，并组织社群走进校园交流区块链技术知识分享，通过在不同的行业内普及，搭建多生态的丰富社群，为区块链行业注入新鲜有力的流量群体。
            </p>
          </div>
          
        </div>
      </div>
      <div class="eBack">
         <div class="eBackCom">
             <div class="eBackComTit">
               <h3>活动回顾</h3>
             </div>
             <div class="eBackComText clear">
               <ul>
                 <li>
                   <img :src="base.indexUrl+'/img/www/exhibition-pic1_pc.jpg'" width="650" height="400" />
                   <div class="eBackComTextFonts">
                      <h3>
                        Tachion | 科技与艺术
                        
                      </h3>
                      
                      <p>
                        脱口秀艺术家罗依尔、新加坡松艺术文教基金会创始人Allison Liu 和P2P通讯专家Tachion天念。<br />
                        三位跨界嘉宾分别从自己的专业出发，以不同的方式尝试消解科技与艺术的结界。
                      </p>
                      <div class="eBackComTextMore" @click="d1=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
                 <li class="eBackComTextMid">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic2_pc.jpg'" width="650" height="400" />
                   <div class="eBackComTextFonts">
                      <h3>
                        Tachion | 视觉媒体
                        
                      </h3>
                      <p>
                        邀请声音艺术家、上海温哥华电影学院教授Jeremy John Butler，日活上亿的短视频APP国际版负责人Chenyi Qiu和LEDGE同声翻译CEO Bill Wang，依旧由大家喜爱的Ingrid Yu担任主持人。
                      </p>
                      <div class="eBackComTextMore" @click="d2=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
                 <li>
                   <img :src="base.indexUrl+'/img/www/exhibition-pic3_pc.jpg'" width="650" height="400" />
                   <div class="eBackComTextFonts">
                      <h3>
                        杜克大学校园行
                        
                      </h3>
                      <p>
                        走进校园，以《区块链与互联网》为主题，让更多青年人认识区块链，了解区块链，为行业培养更多新生力量。
                      </p>
                      <div class="eBackComTextMore" @click="d3=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
                 <li class="eBackComTextMid">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic4_pc.jpg'" width="650" height="400" />
                   <div class="eBackComTextFonts">
                      <h3>
                        神秘电影之夜
                        
                      </h3>
                      <p>
                        定期组织社群活动神秘电影之夜，活跃社群气氛，促进年轻社群交集。
                      </p>
                      <div class="eBackComTextMore" @click="d4=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
                 <li>
                   <img :src="base.indexUrl+'/img/www/exhibition-pic5_pc.jpg'" width="650" height="400"/>
                   <div class="eBackComTextFonts">
                      <h3>
                        Tachion | 科技+艺术
                        
                      </h3>
                      <p>
                        邀请了北京匡时国际拍卖现当代艺术部总经理Stacie Xie，视效艺术家、Mirage Makers 创始人 Matthieu Tondeur，Tachion Project Leader Ingrid Yu，区块链行业移动端解决方案Virgo Network的创始团队成员们也来到了活动现场。
                      </p>
                      <div class="eBackComTextMore" @click="d5=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
                 <li class="eBackComTextMid">
                   <img :src="base.indexUrl+'/img/www/exhibition-pic6_pc.jpg'" width="650" height="400" />
                   <div class="eBackComTextFonts">
                      <h3>
                        热红酒狂欢夜
                        
                      </h3>
                      <p>
                        2018年12月29日，“热红酒狂欢夜”拉开帷幕，各国来宾举杯同庆，为2018年画上圆满的句号。
                      </p>
                      <div class="eBackComTextMore" @click="d6=true">
                          查看更多现场照片
                        </div>
                   </div>
                   <div class="eBackComTextFont"></div>
                 </li>
               </ul>
             </div>
         </div>
      </div>
      <div class="eBack">
         <div class="eBackCom">
             <div class="eBackComTit">
               <h3>更多活动现场展示</h3>
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
        imgArr:['/img/www/ev4_1.jpg','/img/www/ev4_2.jpg','/img/www/ev4_3.jpg','/img/www/ev4_4.jpg','/img/www/ev4_5.jpg','/img/www/ev4_6.jpg','/img/www/ev4_7.jpg','/img/www/ev4_8.jpg','/img/www/ev4_9.jpg','/img/www/ev4_10.jpg','/img/www/ev4_11.jpg','/img/www/ev4_12.jpg','/img/www/ev4_13.jpg','/img/www/ev4_14.jpg','/img/www/ev4_15.jpg','/img/www/ev4_16.jpg','/img/www/ev4_17.jpg','/img/www/ev4_18.jpg','/img/www/ev4_19.jpg','/img/www/ev4_20.jpg','/img/www/ev4_21.jpg','/img/www/ev4_22.jpg','/img/www/ev4_23.jpg','/img/www/ev4_24.jpg','/img/www/ev4_25.jpg','/img/www/ev4_26.jpg','/img/www/ev4_27.jpg','/img/www/ev4_28.jpg','/img/www/ev4_29.jpg','/img/www/ev4_30.jpg','/img/www/ev4_31.jpeg','/img/www/ev4_32.jpg','/img/www/ev4_33.jpg','/img/www/ev4_33.jpg','/img/www/ev4_34.jpeg','/img/www/ev4_35.jpg','/img/www/ev4_36.jpg','/img/www/ev4_37.jpg',],
        //imgArr:['/img/www/ev1_1.jpg','/img/www/ev1_2.jpg','/img/www/ev1_3.jpg','/img/www/ev1_4.jpg','/img/www/ev1_5.jpg','/img/www/ev1_6.jpg','/img/www/ev1_7.jpg','/img/www/ev1_8.jpg','/img/www/ev2_1.jpg','/img/www/ev2_2.jpg','/img/www/ev2_3.jpg','/img/www/ev2_4.jpg','/img/www/ev2_5.jpg','/img/www/ev2_6.jpg','/img/www/ev2_7.jpg','/img/www/ev2_8.jpg','/img/www/ev2_9.jpg','/img/www/ev2_10.jpg','/img/www/ev2_11.jpg','/img/www/ev2_12.jpg','/img/www/ev2_13.jpg','/img/www/ev2_14.jpg','/img/www/ev2_15.jpg','/img/www/ev2_16.jpg','/img/www/ev2_16.jpg','/img/www/ev2_17.jpg','/img/www/ev2_18.jpg','/img/www/ev2_19.jpg','/img/www/ev2_20.jpg','/img/www/ev2_21.jpg','/img/www/ev2_22.jpg','/img/www/ev2_23.jpg','/img/www/ev2_24.jpg','/img/www/ev2_25.jpg','/img/www/ev2_26.jpg','/img/www/ev3_1.jpg','/img/www/ev3_2.jpg','/img/www/ev3_3.jpg','/img/www/ev3_4.jpg','/img/www/ev3_5.jpg','/img/www/ev3_6.jpg','/img/www/ev3_7.jpg','/img/www/ev3_8.jpg','/img/www/ev3_9.jpg','/img/www/ev3_10.jpg','/img/www/ev3_11.jpg','/img/www/ev4_1.jpg','/img/www/ev4_2.jpg','/img/www/ev4_3.jpg','/img/www/ev4_4.jpg','/img/www/ev4_5.jpg','/img/www/ev4_6.jpg','/img/www/ev4_7.jpg','/img/www/ev4_8.jpg','/img/www/ev4_9.jpg','/img/www/ev4_10.jpg','/img/www/ev4_11.jpg','/img/www/ev4_12.jpg','/img/www/ev4_13.jpg','/img/www/ev4_14.jpg','/img/www/ev4_15.jpg','/img/www/ev4_16.jpg','/img/www/ev4_17.jpg','/img/www/ev4_18.jpg','/img/www/ev4_19.jpg','/img/www/ev4_20.jpg','/img/www/ev4_21.jpg','/img/www/ev4_22.jpg','/img/www/ev4_23.jpg','/img/www/ev4_24.jpg','/img/www/ev4_25.jpg','/img/www/ev4_26.jpg','/img/www/ev4_27.jpg','/img/www/ev4_28.jpg','/img/www/ev4_29.jpg','/img/www/ev4_30.jpg','/img/www/ev4_31.jpeg','/img/www/ev4_32.jpg','/img/www/ev4_33.jpg','/img/www/ev4_33.jpg','/img/www/ev4_34.jpeg','/img/www/ev4_35.jpg','/img/www/ev4_36.jpg','/img/www/ev4_37.jpg','/img/www/ev5_1.jpg','/img/www/ev5_2.jpeg','/img/www/ev5_3.jpg','/img/www/ev5_4.jpg','/img/www/ev5_5.jpg','/img/www/ev5_6.jpg','/img/www/ev5_7.jpg','/img/www/ev5_8.jpg','/img/www/ev5_9.jpg','/img/www/ev5_10.jpeg','/img/www/ev5_11.jpg','/img/www/ev6_1.jpg','/img/www/ev6_2.jpg','/img/www/ev6_3.jpg','/img/www/ev6_4.jpg','/img/www/ev6_5.jpg','/img/www/ev6_6.jpg','/img/www/ev6_7.jpg','/img/www/ev6_8.jpg','/img/www/ev6_9.jpg','/img/www/ev6_10.jpg','/img/www/ev6_11.jpg','/img/www/ev6_12.jpg','/img/www/ev6_13.jpg','/img/www/ev6_14.jpg','/img/www/ev6_15.jpeg','/img/www/ev6_16.jpg'],
        d1:false,
        obj1:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev1_1.jpg',
            title:''
          },{
            img:'/img/www/ev1_2.jpg',
            title:''
          },{
            img:'/img/www/ev1_3.jpg',
            title:''
          },{
            img:'/img/www/ev1_4.jpg',
            title:''
          },{
            img:'/img/www/ev1_5.jpg',
            title:''
          },{
            img:'/img/www/ev1_6.jpg',
            title:''
          },{
            img:'/img/www/ev1_7.jpg',
            title:''
          },{
            img:'/img/www/ev1_8.jpg',
            title:''
          },]
        },
        d2:false,
        obj2:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev2_1.jpg',
            title:''
          },{
            img:'/img/www/ev2_2.jpg',
            title:''
          },{
            img:'/img/www/ev2_3.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_4.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_5.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_6.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_7.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_8.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_9.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_10.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_11.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_12.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_13.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_14.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_15.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_16.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_17.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_18.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_19.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_20.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_21.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_22.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_23.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_24.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_25.jpg',
            title:''
          },
          {
            img:'/img/www/ev2_26.jpg',
            title:''
          },]
        },
        d3:false,
        obj3:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev3_1.jpg',
            title:''
          },{
            img:'/img/www/ev3_2.jpg',
            title:''
          },{
            img:'/img/www/ev3_3.jpg',
            title:''
          },{
            img:'/img/www/ev3_4.jpg',
            title:''
          },{
            img:'/img/www/ev3_5.jpg',
            title:''
          },{
            img:'/img/www/ev3_6.jpg',
            title:''
          },{
            img:'/img/www/ev3_7.jpg',
            title:''
          },{
            img:'/img/www/ev3_8.jpg',
            title:''
          },{
            img:'/img/www/ev3_9.jpg',
            title:''
          },{
            img:'/img/www/ev3_10.jpg',
            title:''
          },{
            img:'/img/www/ev3_11.jpg',
            title:''
          },]
        },
        d4:false,
        obj4:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev7_1.jpg',
            title:''
          },{
            img:'/img/www/ev7_2.jpg',
            title:''
          }]
        },
        d5:false,
        obj5:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev5_1.jpg',
            title:''
          },{
            img:'/img/www/ev5_2.jpeg',
            title:''
          },{
            img:'/img/www/ev5_3.jpeg',
            title:''
          },{
            img:'/img/www/ev5_4.jpeg',
            title:''
          },{
            img:'/img/www/ev5_5.jpeg',
            title:''
          },{
            img:'/img/www/ev5_6.jpeg',
            title:''
          },{
            img:'/img/www/ev5_7.jpeg',
            title:''
          },{
            img:'/img/www/ev5_8.jpeg',
            title:''
          },{
            img:'/img/www/ev5_9.jpeg',
            title:''
          },{
            img:'/img/www/ev5_10.jpeg',
            title:''
          },{
            img:'/img/www/ev5_11.jpg',
            title:''
          },]
        },
        d6:false,
        obj6:{
          bgBol:true,
          titBol:true,
          arr:[{
            img:'/img/www/ev6_1.jpg',
            title:''
          },{
            img:'/img/www/ev6_2.jpg',
            title:''
          },{
            img:'/img/www/ev6_3.jpg',
            title:''
          },{
            img:'/img/www/ev6_4.jpg',
            title:''
          },{
            img:'/img/www/ev6_5.jpg',
            title:''
          },{
            img:'/img/www/ev6_6.jpg',
            title:''
          },{
            img:'/img/www/ev6_7.jpg',
            title:''
          },{
            img:'/img/www/ev6_8.jpg',
            title:''
          },{
            img:'/img/www/ev6_9.jpg',
            title:''
          },{
            img:'/img/www/ev6_10.jpg',
            title:''
          },{
            img:'/img/www/ev6_11.jpg',
            title:''
          },{
            img:'/img/www/ev6_12.jpg',
            title:''
          },{
            img:'/img/www/ev6_13.jpg',
            title:''
          },{
            img:'/img/www/ev6_14.jpg',
            title:''
          },{
            img:'/img/www/ev6_15.jpeg',
            title:''
          },{
            img:'/img/www/ev6_16.jpg',
            title:''
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