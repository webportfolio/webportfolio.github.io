// gulp
var gulp        = require('gulp');

var cached      = require('gulp-cached');
var sync        = require('browser-sync');
var watch       = require('gulp-watch');

// 기본 폴더생성 및 삭제
var mkdir       = require('mk-dirs');
var writeFile   = require('write');
var newer 			= require('gulp-newer');
var del 		    = require('del');

// 하위브라우저, jquery, fontAwesome 환경설정(package 설정시 자동처리)
// 'lt-ie-9' ,'components-jqueryui','node-font-awesome'
var pxrem 			= require('gulp-pixrem');

// 각 기능별 사용
var fontAwesome = require('node-font-awesome');
var jquery      = require('jquery');
var sass        = require('gulp-sass');
var postcss			= require('gulp-postcss');

// 기타 부가 기능 처리
var svg2png     = require('gulp-svg2png');
var chalk 			= require('chalk'),
    keyword 		= chalk.bgKeyword('orange');

// lint 기능 처리
var jshint			= require('gulp-jshint');
var outliner    = require('gulp-outliner');

// cli 색상변경 테스트
gulp.task('chalk', function() {
	console.log(keyword(' .............................................................. '));
	console.log(chalk.bold.inverse('chalk test'));
	console.log(keyword(' .............................................................. '));
}); 


// 기본 경로설정
var url = {before:'./public/src/', after:'./public/dist/'},
    path = {
    	// sass 설정
			sass:{
				src:url.before + 'scss/**/*.scss',
				compile:url.before + 'css/',
				dist:url.after + 'css/'
			}, 
			// html 설정
			html:{ // 기본 페이지는 html폴더에 처리(skip page만 별도로 처리해서 메인페이지로 경로이동하도록 작업)
				main:'./html/index.html',	// index.html에서 경로 이동처리시
				err:'404.html',						// 404 error발생시 경로 이동    
				// src:url.before + '**/*.html',				// 현재 미사용중
				dist:url.after + '**/*.html',
			},
			// js 설정
			js: {// es6 또는 typescript작업시 추후 경로 변경처리 현재 path.js.dist 설정되어있음
				dist:url.after + 'js/src/**/*.js', 
				// src:url.before + 'js/**/*.js',
				// dist:url.after + 'js/',     
			},
			// 기타 파일 경로 설정
			modules:'./node_modules/',
			img :url.after + 'img/**/*'
		};

/* =========================================================================================== */

// mk-dirs(폴더 자동생성기능) ----------------------
gulp.task('mkdir',function() {
	Promise.all([
  mkdir(url.before + 'scss/src'),
  mkdir(url.before + 'work/planning'),
  mkdir(url.before + 'work/guideline'),
  mkdir(url.after + 'html/src'),
  mkdir(url.after + 'js/src'),
  mkdir(url.after + 'img'),
 ]);
});

 // gulp.task('json',function() {
	var myJson = require('./package.json');
	var mydata = JSON.stringify(myJson).toString().slice(20,-2).replace(/,/gi,'<br />').replace(/"/gi," ");
	// console.log(mydata);
	// return j;
 // })
  

// write-file(파일 생성) ------------------------
gulp.task('writeFile',function() {
	// .gitignore 파일 생성
	writeFile.sync('./.gitignore', 'node_modules/ \n **/*.{psd,ai,eps}')

	// readme.md 파일생성
	writeFile.sync(url.before + 'README.md', 
		            '# myWeb page guide line \n')

	// index.html
	writeFile.sync(url.after + 'index.html', 
		            '\n<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n	<meta charset="UTF-8">\n	<script>location="'+path.html.main+'"</script>\n	<title>index</title>\n</head>\n<body>\n	\n</body>\n</html>')

	// _variable.scss
	writeFile.sync(url.before + 'scss/base/_variable.scss', '\n// variable.scss \n\n@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);\n\n// color\n$color: ( primary :#777, main :#f06, sub1 :#0af, sub2 :#afc, dark :#333, gray :#777, point:darken(#0af, 20%), font1 :#333, font2 :#777, white :#fff, black :#171717, line1 :#f06, line2 :#777, line3 :#171717, zero :transparent);\n\n// line\n$line: ( l1:1px solid map-get($color, line1), l2:2px solid map-get($color, line2), l3:3px solid map-get($color, point));\n\n// font\n$size: 16 / 16;\n$fontSize: ( base: $size + rem, big: ($size * 2) + rem, big2: ($size * 1.5) + rem, small: ($size * 0.9) + rem, );\n$fontFamily:( english:("myriad pro", arial), korean:(nanumGothic, "nanum Gothic", dotum), all:(english, korean, sans-serif));')
	// _mixin.scss
	writeFile.sync(url.before + 'scss/base/_mixin.scss', '\n // scss class(html에서 불리는 class와는 다소 다른 의미)\n // base layout\n @mixin baseLayout($w:100%, $h:auto, $c:$primary){width:$w; height:$h; background-color:$c;}\n // 외부 기본 연결주소 세팅\n $url:"../../img/";\n // 문자의 연결은 '+' 기호로 표기\n @mixin link($u:$url, $f:none, $p:center, $t:700ms){ a{width: 100%; height: 100%; display: block; background-image: url($u + $f);	background-repeat: no-repeat; background-position:$p;transition:all $t lenear;\n >span{display: block; width:0; height:0; position: absolute; z-index:-100; overflow: hidden;}//span \n }// a \n } // link()\n  @mixin firstPrefix($p, $v){\n 	-webkit-#{$p} : $v;\n 	-moz-#{$p}    : $v;\n 	-ms-#{$p}     : $v;\n 	-o-#{$p}      : $v;\n }\n @mixin lastPrefix($p, $v){\n 	#{$p} : -webkit-$v;\n 	#{$p} : -moz-$v;\n 	#{$p} : -ms-$v;\n 	#{$p} : -o-$v;\n }')
	//reset.css
	writeFile.sync(url.before + 'scss/base/_reset.scss','\n @import "variable.scss";\n /* reset.css */ \n :root{font-size:map-get($fontSize, base); color:inherit;}\n html,body{width: 100%; height: 100%; color:map-get($color, font1);}\n html, body, h1, h2, h3, h4, h5, h6, p, div, img, table, figure, main, header, article, section, footer, nav,aside,main, ul,ol,dl,li,dt,dd{margin:0; padding:0; border:0; outline: 0; font: 100%/1.2 map-get($fontFamily, all); vertical-align:bottom;}\n h1,h2,h3,h4,h5,h6{font-weight:bold;}\n table,tr,td,th,thead,tbody,tfoot{border-style:solid; border-color:map-get($color, font1); 	border-width:1px; border-spacing:0; border-collapse:collapse;}\n ul, ol, li{list-style: none;}\n a{color:inherit; text-decoration: none;}\n a:hover{color:map-get($color, sub1);}\n input[type="submit"],input[type="reset"],input[type="button"],\n button{background-color:map-get($color, zero); cursor:pointer; border:0;}\n /* html5 */\n header, article, section, footer, nav, aside, hgroup, figure, main{	display: block;}\n /* web accessibility */\n a,input,button,textarea,select,button {\n  &:focus{	\n  	outline:map-get($line, l3); position: relative; z-index: 500; \n  }}\n input[type="text"]:focus, input[type="password"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="url"]:focus, input[type="email"]:focus, textarea:focus{background-color:lighten(map-get($color, main), 30%); color:map-get($color, dark); }')
	// common.scss
	writeFile.sync(url.before + 'scss/base/_common.scss','\n /* common */\n /** 기본 웹 css형태를 사용할경우에는 class이름 앞에 me라고 작성후_로 구분하여 이름제작* */\n /*h2, h3, h4, h5, h6{width: 0; height: 0; overflow: hidden;}*/\n .me_base{width: 960px; height: auto;padding:0 10px; box-sizing:border-box;margin: 0 auto;}\n .me_base:after{content:" "; display: block; clear:both;}\n .me_wide{width: auto; max-width: 100%; min-width: 960px; height: auto;padding:0 10px; box-sizing:border-box;	 margin: 0 auto;}\n .me_base:after{content:" "; display: block; clear: both;}\n @media screen and (min-width:960px) {body{overflow-x:hidden;}.me_line{position: relative;}.me_line:before{width: 100vw; height: 100%; position: absolute; top: 0; left: 50%; margin-left: -50vw;background-color:inherit;}}\n .cf::after, .clearfix::after{content:""; display: block; clear: both;}\n .me_full{width: 100%; height: 100%;}\n .me_link a{width:100%; height:100%; background-repeat:no-repeat; display:block;}\n .me_link a>span, .me_hidden, legend{width: 0; height: 0; display: block; position: absolute; z-index: -100; overflow: hidden;}\n #wrap .me_first:first-of-type{margin-left: 0; padding-left: 0; border-left: 0;}\n #wrap .me_last:last-of-type{margin-right: 0; padding-right: 0; border-right: 0;}\n .me_link_bar>li{padding:0 0.4em; position: relative; margin-right:0.2em; float: left;}\n .me_link_bar>li:after{content:" "; width:2px; height:80%; background-color:#999; position:absolute; right:-50%; top:10%; z-index:100;}\n .me_link_bar>li:last-child{border-right:0; margin-right: 0;}\n .me_link_bar>li:last-child:after{display: none;}')
	// normalize.scss 파일생성
	writeFile.sync(url.before + 'scss/normalize.scss','\n @import "./base/reset.scss";\n @import "./base/common.scss";\n @import "./base/mixin.scss";')

	/* // 404.html 생성 ============================================================ */
		// 404.html
		writeFile.sync(url.after+'html/404.html','<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n	<meta charset="UTF-8">\n	<meta http-equiv="X-UA-Compatible" content="IE=edge">\n	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0">\n <!-- [If lte IE 9]>\n   <script type="text/javascript" src="../js/base/lt-ie-9.min.js"></script>\n <! [endif] -->\n <link rel="stylesheet" href="../fontAwesome/css/font-awesome.min.css">\n<link rel="stylesheet" href="../css/normalize.css">\n <link rel="stylesheet" href="../css/main.css">\n <link rel="apple-touch-icon" type="image/png" href="../logo.png">\n <link rel="shortcut icon" type="image/png" href="../logo.png">\n <script src="../js/base/jquery.min.js"></script>\n <script src="../js/base/jquery-ui.min.js"></script>\n <title>complete web</title>\n</head>\n<body>\n	<div id="wrap">\n		\n	<!-- main.html -->\n		<article id="mainContent">\n	<div class="logo"><img src="../img/logo.svg" alt="xido web logo" /></div>		\n<h2>404 ERROR</h2>\n			<p>요청하신 페이지는 없는 페이지 입니다. 다시한번 정확한 주소를 확인하세요.</p>	</article>\n\n	</div>\n	<script src="../js/src/commonHtml.js"></script>\n</body>\n</html>')

	/* // 임시파일 생성 ============================================================ */
		// main.html
		writeFile.sync(url.after+'html/main.html','<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n	<meta charset="UTF-8">\n	<meta http-equiv="X-UA-Compatible" content="IE=edge">\n	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0">\n <!-- [If lte IE 9]>\n   <script type="text/javascript" src="../js/base/lt-ie-9.min.js"></script>\n <! [endif] -->\n <link rel="stylesheet" href="../fontAwesome/css/font-awesome.min.css">\n<link rel="stylesheet" href="../css/normalize.css">\n <link rel="stylesheet" href="../css/main.css">\n <link rel="apple-touch-icon" type="image/png" href="../logo.png">\n <link rel="shortcut icon" type="image/png" href="../logo.png">\n <script src="../js/base/jquery.min.js"></script>\n <script src="../js/base/jquery-ui.min.js"></script>\n <title>complete web</title>\n</head>\n<body>\n	<div id="wrap">\n		\n	<!-- main.html -->\n		<article id="mainContent">\n	<div class="logo"><img src="../img/logo.svg" alt="xido web logo" /></div>		\n<h2>gulp setting complete</h2>\n			<p>gulp를 사용한 웹페이지 세팅이 완료되었습니다. <br />\n				 문서를 하나씩 작성해서 다양한 측면에서 문제 없는지 파악하신 후 사용하세요.<br />\n				 사용시 생기는 다양한 문제는 수정해서 사용하시기 바랍니다. \n			</p>\n	<h3>사용된 modules</h3><p id="modules"></p>	</article>\n\n	</div>\n	<script src="../js/src/commonHtml.js"></script>\n <script src="../js/src/mydata.js"></script>\n</body>\n</html>')

		// main.html 에 headBox, footBox 파일 삽입
		writeFile.sync(url.after + 'html/src/headBox.html', '<!-- headBox.html -->\n	<h1><a href="main.html">xido web</a></h1>')
		writeFile.sync(url.after + 'html/src/footBox.html', '<!-- footbox.html -->\n<h2 class="me_hidden">complete</h2>\n<p>&copy; xido web.</p>')

		// main.scss 파일생성을 위한 기본 부분파일 생성 ------------
		// _wrap.scss
		writeFile.sync(url.before + 'scss/src/_wrap.scss', '// _wrap.scss\n \n /* =========== wrap.css ================== */\n #wrap{width: 100%; min-width:960px; height: auto; margin: 0 auto;}')
		// _headBox.scss
		writeFile.sync(url.before + 'scss/src/_headBox.scss', '// _headBox.scss\n/* ============== headBox.css ============== */\n#headBox{width: 100%; height: auto; padding: 1rem; background-color:map-get($color,point); color:map-get($color, white);font-size:map-get($fontSize,big);  margin-bottom:2rem;\n	&:hover a{color:map-get($color,white); font-weight:bold; text-shadow:0.2rem 0.2rem 0.2rem map-get($color, gray); text-decoration:underline;}\n>h1{font-size: inherit; color:inherit; text-align:center;\n}\n}')
		// _footBox.scss
		writeFile.sync(url.before + 'scss/src/_footBox.scss', '// _footBox.scss\n/* ============== footBox.css ============== */\n#footBox{width: 100%; height: auto; padding: 1rem; margin-top:1rem; background-color:map-get($color, gray); color:map-get($color, white);\n	>p{font-size:map-get($fontSize,small); 	text-align: center;}\n}')
		// _mainContent.scss
	 writeFile.sync(url.before + 'scss/src/_mainContent.scss', '// mainContent.scss \n/* ========== mainContent.css ========== */ \n#mainContent{width: 960px; margin: 0 auto; text-align: center;\n .logo{width:10rem; height:auto; margin:0.5rem auto;  \n >img{width:100%; height:auto;}} \n >h2{border-bottom:map-get($line, l1); padding-bottom:0.5rem; margin-bottom:1rem; font-size:map-get($fontSize,big2); color:map-get($color,point);}\n h3{font-size:map-get($fontSize,big2);margin-top:1rem; border-bottom:map-get($line, l2)}\n >p{line-height:1.4rem; color:map-get($color,gray); text-align:center;} \n #modules{width:300px; margin:1rem auto; padding:1rem; background-color:lighten(map-get($color,point),60%); color:map-get($color,black); text-align:left; font-size:1.1rem; line-height:1.5rem; border-radius:0.5rem; word-spacing:0.3rem;}}')
	 // main.scss 파일생성
		writeFile.sync(url.before + 'scss/main.scss', '// main.scss \n/* ========== main.css ========== */ \n @import "./base/variable.scss";\n @import "./base/mixin.scss";\n\n @import "./src/headBox.scss";\n @import "./src/mainContent.scss";\n @import "./src/footBox.scss"; ')

		// jquery를 활용하여 파일 삽입
		// headBox, footBox, 파일연동
		writeFile.sync(url.after + 'js/src/commonHtml.js', "// commonHeadHtml.js\n (function($) {\n 	var wrap = $('#wrap');\n 	wrap.prepend('<header id=\"headBox\"></header>');\n 	wrap.append('<footer id=\"footBox\"></footer>');\n\n 	var headBox = $('#headBox');\n 	var footBox = $('#footBox');\n\n 	headBox.load('./src/headBox.html');\n 	footBox.load('./src/footBox.html');\n var myModules = $('#modules'); \n myModules.html(\'"+ mydata +" \'); })(this.jQuery);")
		// 사용 모듈 내용 삽입
		writeFile.sync(url.after + 'js/src/mydata.js', "// mydata.js\n (function($) { \n var myModules = $('#modules'); \n myModules.html(\'"+ mydata +" \'); })(this.jQuery);")
	/* // ==================================================================== */

	// make svg file
	writeFile.sync(url.after + 'img/logo.svg', 
		            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">\n<style type="text/css">\n .st0{fill:#FF0066;}\n .st1{fill:#FFFFFF;}\n</style>\n<rect class="st0" width="90" height="90"/>\n<g>\n	<polygon class="st1" points="22.6,6.2 7.6,6.2 7.6,19.5 27.3,39.1 41.4,24.9 	"/>\n	<polygon class="st1" points="84.3,6.2 69.3,6.2 46,29.4 45.9,29.4 31.7,43.5 7.6,67.6 7.6,81.2 8.1,81.7 21.8,81.7 46,57.6 70.1,81.7 83.8,81.7 84.3,81.2 84.3,67.6 60.2,43.5 84.3,19.5 	"/>\n</g>\n</svg>') });

// // favicon 생성 -------------------------

gulp.task('favicon', function () {
	gulp.src(url.after + 'img/logo.svg')
        .pipe(svg2png())
        .pipe(gulp.dest(url.after));

});
// html ------------------------
// html validator 기능 처리(파일 미확인)

gulp.task('html', function(){
	return gulp.src(path.html.dist)
	           .pipe(cached('htmlFiles'))
	           .pipe(sync.stream());
});
// js --------------------------

// // jsHint 기능처리
var jsError = function(error) {
	  console.log(keyword(' ERROR .............................................................. '),'\n') 
	  	error.forEach(function(result, index){
		  	var err = result.error;
		  	var file = result.file;
		  	console.log(chalk.bold.red(` ${index+1} : `),
		  							chalk(`File: ${file},  Line: ${err.line}, Col: ${err.character}, Code: ${err.code}`))
		  	console.log(keyword(` Error: ${err.reason}`),'\n')
		  })
    console.log(keyword('.................................................................... ')) 
	}

// js 기능처리
gulp.task('js', function(){
	return gulp.src(path.js.dist)
						 .pipe(cached('jsFiles'))
						 .pipe(jshint())
						 .pipe(jshint.reporter(jsError))
						 .pipe(sync.stream());
});
// fontAwesome ------------------------
gulp.task('fontAwesome',function() {
 gulp.src([path.modules+'font-awesome/**/*.*', 
 					 '!'+path.modules+'font-awesome/less/**/*.*', 
 					 '!'+path.modules+'font-awesome/scss/**/*.*', 
 					 '!'+path.modules+'font-awesome/**.txt'])
     .pipe(gulp.dest(url.after+ '/fontAwesome'))
});
// li-ie-9 ----------------------
gulp.task('ie',function() {
	gulp.src(path.modules+'lt-ie-9/lt-ie-9.min.js')
			.pipe(gulp.dest(url.after+'js/base/'));
});
// jQuery --------------------
gulp.task('jquery', function() {
	gulp.src([path.modules+'jquery/dist/jquery.min.js', path.modules+'components-jqueryui/jquery-ui.min.js'])
			.pipe(gulp.dest(url.after+'js/base/'));
});

// sass ------------------------
// sass option
var scssOptions = { 
	includePaths: url.before + 'scss/',
	/** 
	* outputStyle (Type : String , Default : nested) 
	* CSS의 컴파일 결과 코드스타일 지정 
	* Values : nested, expanded, compact, compressed */ 
	outputStyle : "compact", 
	/** 
	* indentType (>= v3.0.0 , Type : String , Default : space) 
	* 컴파일 된 CSS의 "들여쓰기" 의 타입 
	* Values : space , tab */ 
	indentType : "tab", 
	/** 
	* indentWidth (>= v3.0.0, Type : Integer , Default : 2) 
	* 컴파일 된 CSS의 "들여쓰기" 의 갯수 */ 
	indentWidth : 1, // outputStyle 이 nested, expanded 인 경우에 사용 
	/** 
	* precision (Type : Integer , Default : 5) 
	* 컴파일 된 CSS 의 소수점 자리수. */ 
	precision: 6, 
	/** 
	* sourceComments (Type : Boolean , Default : false) 
	* 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시. 
	*/ 
	sourceComments: false 
};

function handleError (error) {
  console.log(keyword(' ERROR .............................................................. ')) 
  var start = error.toString().indexOf(">");
  console.log( keyword('\n'+ 'Status: ' + error.status+'\n',
  	                   'File: ' + error.relativePath+'\n',
                       'Line: ' + error.line +  ', Coulumn: ' + error.column+'\n',
                       error.formatted.toString() )
						  )
  console.log(keyword(' ...................................................................... ')) 
  // console.log(error.toString())
  this.emit('end')
}

// css 단위변환 파일
gulp.task('sass', function(){
		return gulp.src(path.sass.src)
							 // .pipe(newer(path.sass.src))
		           .pipe(cached('sassFiles'))
							 .pipe(sass(scssOptions).on('error', handleError) )
							 .pipe(pxrem())
							 .pipe(gulp.dest(path.sass.dist))
							 .pipe(sync.stream());
		});

// browser-sync ----------------
gulp.task('sync',['html', 'sass', 'js'], function() {
   return sync.init({ 
   	server: { baseDir: url.after }  
   },function (err, bs) {
    bs.addMiddleware("*", function (req, res) {
        res.writeHead(302, { "location": path.html.err  });
        res.end("Redirecting!");
        });
		});
	});

// watch -----------------------
gulp.task('watch', function(){
	// gulp.watch(path.sass.src, ['sass']);
	// gulp.watch(path.html.dist, ['html']);
	// gulp.watch(path.js.dist, ['js']);
	watch(path.sass.src, function(){ gulp.start('sass')});
	watch(path.html.dist, function(){ gulp.start('html')});
	watch(path.js.dist, function(){ gulp.start('js')});
	});  

// data 삭제처리 --------------------
gulp.task('cleanAll',function() {
	return del('./public/',{forct:true});
})

gulp.task('clean', function(){
  return del([url.after, '!dist'], {force:true});
});
gulp.task('cssClean',function(){
	return del([url.after+'css'],{force:true})
});

// make setting ----------------
gulp.task('set',['mkdir', 'writeFile', 'favicon', 'ie', 'jquery', 'fontAwesome','sass']);

// default ---------------------
gulp.task('default',['sync', 'watch']);










