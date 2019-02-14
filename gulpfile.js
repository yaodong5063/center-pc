const gulp=require('gulp');
const loadPlugins=require('gulp-load-plugins');
const plugins=loadPlugins();   //引用其他模块
const runSequence = require('run-sequence')
const del=require('del');  //删除文件


const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');      

const entry = require('./webpack/webpack.entry.js'); //entery配置文件
const pluginfs=require('./webpack/webpack.plugins.js'); //plugins配置文件
const webpackConfig = require('./webpack.config.js');

const browserSync=require('browser-sync').create();   //服务


//html移动
gulp.task('html',()=>{
	return gulp.src('./src/**/*.html')
	    .pipe(plugins.cached())  //只对修改的文件进行copy
	    .pipe(plugins.useref())  //对标签的css,js合并
	    .pipe(plugins.htmlmin({
	        removeComments: true,//清除HTML注释
	        collapseWhitespace: true,//压缩HTML
	        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
	        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	        minifyJS: true,//压缩页面JS
	        minifyCSS: true//压缩页面CSS
	    }))
	    .pipe(plugins.revAll.revision({                 // 生成版本号
            dontRenameFile: ['.html'],          // 不给 html 文件添加版本号
            dontUpdateReference: ['.html']      // 不给文件里链接的html加版本号
        }))  //对合并后的css,js进行新增版本号
        //对引入的css,js,img替换路径
        .pipe(plugins.replace(/(.\/|..\/)(..\/)*(css|js)/g, function(match, p1, offset, string) {
        	console.log(string,p1,offset)
        	if(p1=='../'){
        		return '//www.blockchaincentreglobal.com/'+string
        	}else{
        		return '"//www.blockchaincentreglobal.com/'+string
        	}
            
        }))
	    .pipe(gulp.dest('./dist/'))
});
//css移动
gulp.task('css',()=>{
	del(['./dist/css/*'],{force:true});  //清空css
	return gulp.src('./src/css/**/*.css')
	    .pipe(plugins.cleanCss({conpatibility:'ie8'}))  //压缩
	    .pipe(plugins.rev())
	    .pipe(gulp.dest('./dist/css/'))
	    .pipe(plugins.rev.manifest())  //产生hash配置json
	    .pipe(gulp.dest('./json/css'));
});
//js移动
gulp.task('js',(done)=>{
	//webpack仅作为js处理工具
	return webpack(webpackConfig,function(err,stats){
	           	  console.log(stats.hash,stats.toString());
	           	  done();
	           })
});
//js移动
gulp.task('copy:js',()=>{
	del(['./dist/js/*'],{force:true});  //清空js
	//webpack仅作为js处理工具
	return gulp.src('./src/copyJs/js/**/*.js')
	    .pipe(plugins.rev())
	    .pipe(gulp.dest('./dist/js/'))
	    .pipe(plugins.rev.manifest())  //产生hash配置json
	    .pipe(gulp.dest('./json/js'));
});


//img移动
gulp.task('img',()=>{
	del(['./dist/img/www/*'],{force:true});  //清空img
	return gulp.src('./src/img/**/www/*.*')
	    .pipe(plugins.cached('img'))
	    .pipe(plugins.rev())
	    .pipe(gulp.dest('./dist/img/'))
	    .pipe(plugins.rev.manifest())
	    .pipe(gulp.dest('./json/img/www/'));
});  
//img移动
gulp.task('imgCanvas',()=>{
	del(['./dist/img/new/*'],{force:true});  //清空img
	return gulp.src('./src/img/**/new/**/*.*')
	    .pipe(plugins.cached('img'))
	    .pipe(plugins.rev())
	    .pipe(gulp.dest('./dist/img/'))
	    .pipe(plugins.rev.manifest())
	    .pipe(gulp.dest('./json/img/new/'));
});  
//其他文件移动
gulp.task('other', function() {
	del(['./dist/down/*'],{force:true});  //清空img
    return gulp.src(['./src/**/fonts/*.*','./src/**/webfonts/*.*','./src/**/favicon.ico'])
        .pipe(gulp.dest('./dist'));
});
gulp.task('rev', function() {
    return gulp.src(['./json/**/*.json','./dist/**/*.{css,html,js}'])
        .pipe(plugins.revCollector())//- 根据 .json文件 执行文件内css名的替换
        .pipe(gulp.dest('./dist'));
});
gulp.task('dev', (done)=>{   
  condition = false;   
  runSequence(   
  ['js'], 
  ['img'],   
  ['imgCanvas'], 
  ['css'],        
  
  ['copy:js'],
  ['other'],
  ['html'],
  ['rev'],  
  
  done);});
//监控
gulp.task('watch',()=>{
	gulp.watch('./src/**/*.html',['html']); //监控html变化
	gulp.watch('./src/css/**/*.css',['html','watch:css','rev']);  //监控css变化
	gulp.watch('./src/js/**/*.js',['js','rev','html']);  //监控js
	gulp.watch('./src/img/**/*',['img']);  //监控图片
	gulp.watch('./dist/**/*.json',['rev']); //监控html和json
})

//服务,本地开发使用--启动npm run serve
gulp.task('serve', () => {
	browserSync.init({
		files:['./dist/**/*'],
	    server:{
	        baseDir:'./dist'  // 设置服务器的根目录
	    },
	    open:'external',
	    host:'www.blockchaincentreglobal.com',
	    port:80  // 指定访问服务器的端口号
	});
});
//服务,本地开发使用--启动npm run serve
gulp.task('webpackServe', (done) => {
	return webpack({
		
	},function(err,stats){
	           	  console.log(stats.hash,stats.toString());
	           	  done();
	           })
});

gulp.task('default',['dev','watch']); //执行
//清缓存
gulp.task('clean',()=>{
	delete plugins.cached.caches['html','js','css','img']
});
gulp.task('lastWork',['cleanCache']);