<template lang="html">

   <div class="index">
     <my-header :index="'1'" :lang="english.common.header"></my-header>
      <div class="banner">
        <img :src="base.indexUrl+'/img/www/news-topbg_pc.jpg'" width="1440" />
        <div class="bannerText">
          <h3>新闻</h3>
          <p>NEWS</p>
        </div>
        
      </div>
      
      <div class="bannerRight">
        <img :src="base.indexUrl+'/img/www/education-logoright_pc.png'" width="390" height="430" />
      </div>
      <div class="news">
        <div class="newsCon clear">
          <div class="newsL">
            <ul>
              <li>
                <a href="/#/detail/1">
                  01国际行业资讯 | Blockshine达沃斯特别报道预告：聚焦全球化4.0
                </a>
              </li>
              <li>
                <a href="/#/detail/2">
                  02国际行业资讯| Sam做客“金色相对论”：以太坊硬分叉将在未来打造更友好的落地生态
                </a>
              </li>
              <li>
                <a href="/#/detail/3">
                  03立陶宛BC |立陶宛区块链技术中心热烈庆祝建立一周年
                </a>
              </li>
              <li>
                <a href="/#/detail/4">
                  04Blockchain Global创始人兼CEO Sam Lee接受CNNMoney Switzerland采访
                </a>
              </li>
              <li>
                <a href="/#/detail/5">
                  05Sam Lee出席第15届中国国际金融论坛：以可持续的方式推动区块链生态系统的建立
                </a>
              </li>
              <li>
                <a href="/#/detail/6">
                  06国际行业资讯| United Labs投资人年度盛典在沪举行 区块链行业指数Merit30首次发布
                </a>
              </li>
              <li>
                <a href="/#/detail/7">
                  07国际行业资讯| 福布斯专栏 | 区块链监管的危与机
                </a>
              </li>
              <li>
                <a href="/#/detail/8">
                  08墨尔本BC | 众筹共票理论国际考察交流团访问Blockchain Centre Melbourne，考察澳大利亚区块链应用
                </a>
              </li>
              <li>
                <a href="/#/detail/9">
                  达沃斯后记 | Layla：信任是全球化4.0时代最重要的价值观
                </a>
              </li>
              <li>
                <a href="/#/detail/10">
                  黑山共和国证监会主席Zoran Dikanovic到访Blockchain Centre Shanghai
                </a>
              </li>
              <li>
                <a href="/#/detail/11">
                  青年力量 | Tachion校园行·昆山杜克大学
                </a>
              </li>
              <li>
                <a href="/#/detail/12">
                  "区块链36计"2018收官，第三期今日正式上线！
                </a>
              </li>
              <li>
                <a href="/#/detail/13">
                  Shine On公益教育计划正式启动，为浦江文馨学校带来爱心第一课

                </a>
              </li>
              <li>
                <a href="/#/detail/14">
                  Blockchain Centre 与澳大利亚贸易委员会签订MOU，共同推进区块链全球发展
                </a>
              </li>
              <li>
                <a href="/#/detail/15">
                  Blockchain Global 与俄罗斯国有银行Vnesheconombank 达成战略合作
                </a>
              </li>
            </ul>
          </div>
          <div class="newsR">
            <div class="newsRTit">
              <h3>国际交流</h3>
            </div>
            <div class="scrolltop">
              <ul>
                <li style="height:253px;">
                  <img :src="base.indexUrl+'/img/www/n1.jpeg'" width="450" />
                </li>
                <li style="height:610px;">
                  <img :src="base.indexUrl+'/img/www/n2.jpeg'" width="450" />
                </li>
                <li style="height:300px;">
                  <img :src="base.indexUrl+'/img/www/n3.jpeg'" width="450" />
                </li>
                <li style="height:300px;">
                  <img :src="base.indexUrl+'/img/www/n4.jpeg'" width="450" />
                </li>
                <li style="height:300px;">
                  <img :src="base.indexUrl+'/img/www/n5.jpeg'" width="450" />
                </li>
                <li style="height:300px;">
                  <img :src="base.indexUrl+'/img/www/n6.jpeg'" width="450" />
                </li>
                <li style="height:350px;">
                  <img :src="base.indexUrl+'/img/www/n7.jpeg'" width="450" />
                </li>
                <li style="height:253px;">
                  <img :src="base.indexUrl+'/img/www/n8.jpeg'" width="450" />
                </li>
              </ul>
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
    // let li=$('.scrolltop');
    // let liA=li.find('li');
    // for(let i=0;i<liA.length;i++){
    //    let h=liA.eq(i).height();
    //    liA.eq(i).css({
    //      height:h+'px';
    //    });
    // }
    $(".scrolltop").imgscroll({
      speed: 40,    //图片滚动速度
      amount: 0,    //图片滚动过渡时间
      width: 1,     //图片滚动步数
      dir: "up"   // "left" 或 "up" 向左或向上滚动
    });

     
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