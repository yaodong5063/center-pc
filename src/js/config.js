var PC = IsPC();
if (!PC) {
     //location.href = "";
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
        return flag;
}
import 'babel-polyfill';
window.$=window.jQuery=require('jquery');
window.base={
    indexUrl:'//www.blockchaincentreglobal.com',
    staticUrl:'//static.blockchaincentreglobal.com/',
    apiUrl:'//api.blockchaincentreglobal.com',
    id:function(){
        var url=window.location.pathname;
        var id=url.split('/');
        return id[id.length-1];
    },
    cookie:{
        set:function(name,value,time){
              var Days = time||1;
              var exp = new Date();
              exp.setTime(exp.getTime() + Days*24*60*60*1000);
              document.cookie = name + "="+ escape (value) + ";expires="+exp.toGMTString()+ ";path=/; domain=.blockchaincentreglobal.com";
        },
        get:function(name){
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
              if(arr=document.cookie.match(reg))
              return unescape(arr[2]);
              else
              return null;

        },
        del:function(name){
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=Method.getCookie(name);
            if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }
    },
    timeEnd(time){
        let t1=new Date(time).getTime()+Math.abs((new Date().getTimezoneOffset()/60)*60*60*1000);
        let  day=new Date(t1).getDate()<10?('0'+new Date(t1).getDate()):new Date(t1).getDate(),
             month=new Date(t1).getMonth()+1<10?(0+(new Date(t1).getMonth()+1)):new Date(t1).getMonth()+1,
             year=new Date(t1).getFullYear(),
             hour=new Date(t1).getHours()<10?('0'+new Date(t1).getHours()):new Date(t1).getHours(),
             getMinutes=new Date(t1).getMinutes()<10?('0'+new Date(t1).getMinutes()):new Date(t1).getMinutes(),
             secon=new Date(t1).getSeconds()<10?('0'+new Date(t1).getSeconds()):new Date(t1).getSeconds()
         return year+'-'+month+'-'+day+' '+hour+':'+getMinutes+':'+secon;
    },
    addPrice:function(price){
        //数字,分割
        var arr=price.toString().split('.');
        var num=arr[0].replace(/\B(?=(?:\d{3})+\b)/g, ",");
        var str=arr.length===1?num:(num+'.'+arr[1])
        return str;
    },
    pricePrent(price=0){
        //计算万分位和亿分位
        let priceY=100000000,
            priceW=10000; 
        if(!price) return price;    
        if(price/priceY>=1){
            let priceR=Math.round((price/priceY) * 100) / 100;
            return priceR+'亿';
        }else if(price/priceY<1 && price/priceW>=1){
            let priceR=Math.round((price/priceW) * 100) / 100;
            return priceR+'万';
        }else{
            return Math.round((price) * 1000000) / 1000000;;
        }    

    },
    pricePrentEn(price=0){
        //计算万分位和亿分位
        let priceY=1000000000,
            priceW=1000000; 
        if(!price) return price;    
        if(price/priceY>=1){
            let priceR=Math.round((price/priceY) * 100) / 100;
            return priceR+'Bn';
        }else if(price/priceY<1 && price/priceW>=1){
            let priceR=Math.round((price/priceW) * 100) / 100;
            return priceR+'Mn';
        }else{
            return Math.round((price) * 1000000) / 1000000;;
        }    

    },
    loading: function(dom, bol) {
        var str = '<div class="loading" id="loading_model"><div class="loadQuan"><i class="loadView"></i><i></i><i></i><i></i><i></i></div></div>';
        var a=0;
        
        if (bol) {
          dom.addClass('tl_loading').append(str);
          window.loadTime=setInterval(function(){
                 $('#loading_model').find('i').removeClass('loadView').eq(a).addClass('loadView');
                 a++;
                 a=a==5?0:a
            },200);
        } else {
          $('#loading_model').remove();
          dom.removeClass('tl_loading');
          clearInterval(loadTime);
        }
    },
    prompt:function(err,code,time){
        //code为-1错误提示,0普通提示,1成功提示
        $('.promptMid').remove();
        if(typeof promptTime!='undefined'){
            clearTimeout(promptTime)
        }
        var str="<div class='promptMid' style='position:fixed;line-height:20px;top:50%;left:50%;background:rgba(255,255,255,1);box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);border-radius: 4px ;padding:10px 16px;z-index: 999;'><p>";
        if(code==-1){
            str+='<i class="fas fa-times-circle" style="color:#DC5A5A"></i><em style="color: rgba(0, 0, 0, 0.65);font-size: 14px;margin-left: 10px;">'+err+'</em></p></div>';
        }else if(code==0){
            str+='<i class="fas fa-exclamation-circle" style="color:#EAA84B"></i><em style="color: rgba(0, 0, 0, 0.65);font-size: 14px;margin-left: 10px;">'+err+'</em></p></div>';
        }else if(code==1){
            str+='<i class="fas fa-check-circle" style="color:#1879F0"></i><em style="color: rgba(0, 0, 0, 0.65);font-size: 14px;margin-left: 10px;">'+err+'</em></p></div>'
        };
        $('body').append(str);
        var width=$('.promptMid').width();
        var height=$('.promptMid').height();
        $('.promptMid').css({
            'margin-top':'-'+height/2+'px',
            'margin-left':'-'+width/2+'px'
        });
        window.promptTime=setTimeout(function() {
            $('.promptMid').remove();
        }, time);
    },
    leancloud(text={},show=true,time=3000){
        let str=`<div class="leancloud" id="leancloud">
                    <div class="leancloudClose"><img src="${base.staticUrl}/img/www/popClose.png" width="10" height="10"></div>
                    <div class="leancloudText clear">
                        <div class="leancloudImg">
                          <i class="fas fa-volume-up"></i>${text.title}
                        </div>
                        <div class="leancloudCon black">
                            ${text.value}
                        </div>
                    </div>
                </div>`;
        if(show){
            $('#leancloud').remove();       
            $('body').append(str);
            $('#leancloud').animate({
                'right':'0px'
            },500); 
            if(typeof leancloudTime!=='undefined'){
                clearTimeout(leancloudTime);
            }
            window.leancloudTime=setTimeout(function(){
                base.leancloud({},false);
            },time); 
        }else{
            $('#leancloud').animate({
                'right':'-100%'
            },500); 
        }
        $('.leancloudClose').click(function(){
            base.leancloud({},false);
        })
             
        // setTimeout(function() {
        //     $('.leancloud').remove();
        // }, time);        
    }
    
};



//ie8兼容forEach
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
}
//下面是继承
String.prototype.parseURL = function(){
    var url =this.toString()
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/'),
        params: (function() {
            var ret = {};
            var seg = a.search.replace(/^\?/, '').split('&').filter(function(v,i){
                if (v!==''&&v.indexOf('=')) {
                    return true;
                }
            });
            seg.forEach( function(element, index) {
                var idx = element.indexOf('=');
                var key = element.substring(0, idx);
                var val = element.substring(idx+1);
                ret[key] = val;
            });
            return ret;
        })()
    };
}
//中英文首页切换
// if(typeof base.cookie.get('lang')!='undefined' && !!base.cookie.get('lang')){
//     if(base.cookie.get('lang')=='en'&& !location.href.parseURL().file && location.href.parseURL().path=='/'){
//         location.href='/quotes.html'
//     }
// }
String.prototype.addPrice=function(){
    //数字,分割
    var price=this;
    var arr=price.toString().split('.');
    var num=arr[0].replace(/\B(?=(?:\d{3})+\b)/g, ",");
    var str=arr.length===1?num:(num+'.'+arr[1])
    return str;
};



window.lang=require('./language/english.config.js');

//window.NProgress=require('./nprogress.js');


