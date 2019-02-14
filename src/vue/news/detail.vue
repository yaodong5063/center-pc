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
            <div class="newsDetail">
              <h3>{{objText.title}}</h3>
              <p>
                <span>{{objText.time}}</span>
                <em>{{objText.source}}</em>
              </p>
            </div>
            <div class="newsDetailText" v-html="objText.text">
                 
            </div>
            <div class="newsDetailBack">
              <span @click="$router.push({name:'news'})">< 返回</span>
            </div>
            <div class="newsDetailPn">
              <span @click="prov">< {{provText}}</span>
              <span @click="next">{{nextText}} ></span>
            </div>
          </div>
          <div class="newsR">
            <div class="newsRTit">
              <h3>更多资讯</h3>
            </div>
            <div class="scrolltop">
              <ul>
                <li v-for="item in newsList" @click="href(item.id)">
                  <img :src="base.indexUrl+item.img" width="450" height="250" />
                  <p class="elDb">
                    {{item.name}}
                  
                  </p>
                </li>

              </ul>
            </div>
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
        obj:[{},{
          title:'国际行业资讯 | Blockshine达沃斯特别报道预告：聚焦全球化4.0',
          time:'2019/1/26',
          source:'Layla Dong  Blockshine',
          text:`<img src="${base.indexUrl}/img/new/1/1-1.png" width="730" /><img src="${base.indexUrl}/img/new/1/1-2.png" width="730" /><img src="${base.indexUrl}/img/new/1/1-3.png" width="730" />`
        },{
          title:'国际行业资讯| Sam做客“金色相对论”：以太坊硬分叉将在未来打造更友好的落地生态',
          time:'2019/1/18',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/2/2-1.png" width="730" /><img src="${base.indexUrl}/img/new/2/2-2.png" width="730" />`
        },{
          title:'立陶宛BC |立陶宛区块链技术中心热烈庆祝建立一周年',
          time:'2019/1/14',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/3/3-1.png" width="730" /><img src="${base.indexUrl}/img/new/3/3-2.png" width="730" /><img src="${base.indexUrl}/img/new/3/3-3.png" width="730" />`
        },{
          title:'Blockchain Global创始人兼CEO Sam Lee接受CNNMoney Switzerland采访',
          time:'2019/1/18',
          source:'Ruslanas',
          text:`<img src="${base.indexUrl}/img/new/4/4-1.png" width="730" /><img src="${base.indexUrl}/img/new/4/4-2.png" width="730" />`
        },{
          title:'Sam Lee出席第15届中国国际金融论坛：以可持续的方式推动区块链生态系统的建立',
          time:'2018/12/18',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/5/5-1.png" width="730" /><img src="${base.indexUrl}/img/new/5/5-2.png" width="730" /><img src="${base.indexUrl}/img/new/5/5-3.png" width="730" />`
        },{
          title:'国际行业资讯| United Labs投资人年度盛典在沪举行 区块链行业指数Merit30首次发布',
          time:'2018/12/17',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/6/6-1.png" width="730" /><img src="${base.indexUrl}/img/new/6/6-2.png" width="730" /><img src="${base.indexUrl}/img/new/6/6-3.png" width="730" />`
        },{
          title:'国际行业资讯| 福布斯专栏 | 区块链监管的危与机',
          time:'2018/12/6',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/7/7-1.png" width="730" /><img src="${base.indexUrl}/img/new/7/7-2.png" width="730" />`
        },{
          title:'墨尔本BC | 众筹共票理论国际考察交流团访问Blockchain Centre Melbourne，考察澳大利亚区块链应用',
          time:'2018/11/8',
          source:'福布斯中国  Blockshine',
          text:`<img src="${base.indexUrl}/img/new/8/8-1.png" width="730" /><img src="${base.indexUrl}/img/new/8/8-2.png" width="730" /><img src="${base.indexUrl}/img/new/8/8-3.png" width="730" /><img src="${base.indexUrl}/img/new/8/8-4.png" width="730" />`
        },{
          title:'达沃斯后记 | Layla：信任是全球化4.0时代最重要的价值观',
          time:'2018/8/15',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/9/9-1.png" width="730" /><img src="${base.indexUrl}/img/new/9/9-2.png" width="730" />`
        },{
          title:'黑山共和国证监会主席Zoran Dikanovic到访Blockchain Centre Shanghai',
          time:'2018/5/19',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/10/10-1.png" width="730" /><img src="${base.indexUrl}/img/new/10/10-2.png" width="730" />`
        },{
          title:'青年力量 | Tachion校园行·昆山杜克大学',
          time:'2018/5/2',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/11/11-1.png" width="730" /><img src="${base.indexUrl}/img/new/11/11-2.png" width="730" /><img src="${base.indexUrl}/img/new/11/11-3.png" width="730" />`
        },{
          title:'"区块链36计"2018收官，第三期今日正式上线！',
          time:'2019/1/18',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/12/12-1.png" width="730" /><img src="${base.indexUrl}/img/new/12/12-2.png" width="730" /><img src="${base.indexUrl}/img/new/12/12-3.png" width="730" /><img src="${base.indexUrl}/img/new/12/12-4.png" width="730" /><img src="${base.indexUrl}/img/new/12/12-5.png" width="730" />`
        },{
          title:'Shine On公益教育计划正式启动，为浦江文馨学校带来爱心第一课',
          time:'2018/12/29',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/13/13-1.png" width="730" /><img src="${base.indexUrl}/img/new/13/13-2.png" width="730" /><img src="${base.indexUrl}/img/new/13/13-3.png" width="730" />`
        },{
          title:'Blockchain Centre 与澳大利亚贸易委员会签订MOU，共同推进区块链全球发展',
          time:'2018/12/26',
          source:'BlockchainCentreShanghai',
          text:`<img src="${base.indexUrl}/img/new/14/14-1.png" width="730" /><img src="${base.indexUrl}/img/new/14/14-2.png" width="730" />`
        },{
          title:'Blockchain Global 与俄罗斯国有银行Vnesheconombank 达成战略合作',
          time:'2018/10/16',
          source:'Blockshine',
          text:`<img src="${base.indexUrl}/img/new/15/15-1.png" width="730" /><img src="${base.indexUrl}/img/new/15/15-2.png" width="730" />`
        }],
        objText:{
          title:'',
          time:'',
          source:'',
          text:''
        },
        newsList:[{
          id:2,
          name:'国际行业资讯| Sam做客“金色相对论”：以太坊硬分叉将在未来打造更友好的落地生态',
          img:'/img/www/nr1.jpg'
        },{
          id:3,
          name:'立陶宛BC |立陶宛区块链技术中心热烈庆祝建立一周年',
          img:'/img/www/nr2.jpg'
        },{
          id:6,
          name:'国际行业资讯| United Labs投资人年度盛典在沪举行 区块链行业指数Merit30首次发布',
          img:'/img/www/nr3.jpg'
        },{
          id:8,
          name:'墨尔本BC | 众筹共票理论国际考察交流团访问Blockchain Centre Melbourne，考察澳大利亚区块链应用',
          img:'/img/www/nr4.jpg'
        },{
          id:14,
          name:'Blockchain Centre 与澳大利亚贸易委员会签订MOU，共同推进区块链全球发展',
          img:'/img/www/nr5.jpg'
        },],
        provText:'上一篇',
        nextText:'下一篇'

	  }
  },
  watch:{
    '$route.params.id'(){
       this.objText=this.obj[this.$route.params.id];
       this.texts();
       window.scrollTo(0,800); 
       
    }
  },
  components:{
	  
  },
  mounted(){
    this.objText=this.obj[this.$route.params.id];
    this.texts();
     
  },
  computed: {
    
  },
  methods:{
    texts(){
      if(this.$route.params.id<=1){
         this.provText='没有了';
         this.nextText='下一篇';
       }else if (this.$route.params.id>=15){
         this.provText='上一篇';
         this.nextText='没有了';
       }else{
         this.provText='上一篇';
         this.nextText='下一篇';
       }
    },
    href(id){

      window.location.href=`/#/detail/${id}`;
            
    },
    next(){
      if(this.$route.params.id==15){
        return !1;
      }
      let id=Number(this.$route.params.id)+1;
      window.location.href=`/#/detail/${id}`;
    },
    prov(){
      if(this.$route.params.id==1){
        return !1;
      }
      let id=Number(this.$route.params.id)-1;
      window.location.href=`/#/detail/${id}`;
    }
      
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 @import 'detail.less'
</style>