<template lang="html">
	<div  class="popModel">
    <div class="popBackground" v-if="objDate.bgBol" v-show="databoll" @click="popBgClick"></div>
    <div class="pop" id="pop" :style="styleObject" v-show="databoll" >
      <div class="popClose" @click="popBgClick">
        <img src="/img/www/pop-close-pc-11.png" width="13" height="20"/>
      </div>
      <div class="popText">
        
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="item in objDate.arr" class="swiper-slide">
              <div class="imgText">
                <img :src="item.img" height="600"/>
                <p class="elDb">{{item.title}}</p>
              </div>
            </div>
          </div>
          
        </div>
        <!-- Add Arrows -->
        <div class="dialog-next">
          <img src="/img/www/pop-leftarrow-12.png" width="23" height="51"/>
        </div>
        <div class="dialog-prev">
          <img src="/img/www/pop-rightarrow-13.png" width="23" height="51"/>
        </div>
      </div>
    </div>
  </div>
</template>	
<script>
import Swiper from 'swiper'; 
//以下都是倍数
//sizeW宽度倍数,sizeH高度倍数,speed上下移动速度,spd角度移动速度,speedW左右移动速度，time为延迟动画时长,cImg为画布图片,bImg为画布背景
export default {
	name:'dialogs',
	props: ['databoll','obj'],
  data(){
    return {
      styleObject:null,
      objDate:{
        title:'标题',
        width:1072,
        height:640,
        bgBol:true,
        titBol:true,
        arr:null,
      }
    }
  },
  watch:{
    databoll(){
      this.pop();  
      let _this=this;
      setTimeout(function(){
        _this.swipe();
      },100)
      
      
         
    }
  },
  mounted(){
    Object.assign(this.objDate,this.obj);
    this.pop();
    this.swipe();
    
    
	},
  methods:{
    pop(){
      let height=$('#pop').height();
      this.styleObject={
        'margin-top':'-'+this.objDate.height/2+'px',
        'margin-left':'-'+this.objDate.width/2+'px',
        'width':this.objDate.width+'px',
        'min-height':this.objDate.height+'px'
      }
      if(this.databoll){
        $('body').css({
          'height':'100%',
          'overflow-y':'hidden'
        });
      }else{
        $('body').css({
          'height':'auto',
          'overflow-y':'auto'
        });
      }
    },
    close(){
      this.databoll=false;
      if(this.popWidth==480){
          this.$emit('update:databoll', this.databoll);
      }else{
          this.$emit('update:databoll', this.databoll);
      }  
    },
    popBgClick(){
      this.databoll=false;
      if(this.popWidth==480){
        this.$emit('update:databoll', this.databoll);
      }else{
        this.$emit('update:databoll', this.databoll);
      } 
    },
    swipe(){
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.dialog-next',
          prevEl: '.dialog-prev',
        },
      });
    }
  }
};

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
/**公共弹出层**/
.popBackground{
	background:rgba(0,0,0,.8);
	width:100%;
	height:100%;
	position: fixed;
	top:0;
	left:0;
	z-index:999;
}
.pop{
	
	position: fixed;
	left:50%;
	top:50%;
	margin-left:-280px;
	width:560px;
  overflow:hidden;
  z-index:1000;
  .popClose{
    position:fixed;
    top:20px;
    left:20px;
  }
}
.popTit{
	line-height:49px;
	padding:0 20px;
	
}
.popTit{
	border:0;
}
.popTit h3{
	display:inline-block;
	font-size:16px;
}
.popTitBor h3{
	display:none;
}
.close{
	float:right;
    cursor:pointer;
}

.popText{
  padding:0 86px;
  position:relative;

  .dialog-next{
      position:absolute;
      top:275px;
      left:0px;
      z-index:999;
      cursor:pointer;
    }
    .dialog-prev{
      position:absolute;
      top:275px;
      right:0px;
      z-index:999;
      cursor:pointer;
    }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position:relative;
    
    .swiper-wrapper{
      
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    .imgText{
      width:900px;
      overflow-x:hidden;
      display:inline-block;
    }
    img{
     
      

    }
    p{
      margin-top:12px;
      width:900px;
      font-size:16px;
      color:#fff;
      line-height:18px;
      display:block;
      height:36px;
    }
  }
}
</style>