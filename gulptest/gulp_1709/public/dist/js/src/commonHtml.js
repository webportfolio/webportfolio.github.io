// commonHeadHtml.js
 (function($) {
 	var wrap = $('#wrap');
 	wrap.prepend('<header id="headBox"></header>');
 	wrap.append('<footer id="footBox"></footer>');

 	var headBox = $('#headBox');
 	var footBox = $('#footBox');

 	headBox.load('./src/headBox.html');
 	footBox.load('./src/footBox.html');
 var myModules = $('#modules'); 
 myModules.html(' browser-sync : ^2.18.13 <br /> chalk : ^2.1.0 <br /> components-jqueryui : ^1.12.1 <br /> del : ^3.0.0 <br /> gulp : ^3.9.1 <br /> gulp-cached : ^1.1.1 <br /> gulp-jshint : ^2.0.4 <br /> gulp-newer : ^1.3.0 <br /> gulp-outliner : ^0.0.8 <br /> gulp-pixrem : ^1.0.0 <br /> gulp-postcss : ^7.0.0 <br /> gulp-sass : ^3.1.0 <br /> gulp-svg2png : ^2.0.2 <br /> gulp-watch : ^4.3.11 <br /> jquery : ^3.2.1 <br /> jshint : ^2.9.5 <br /> lt-ie-9 : ^0.1.0 <br /> map-stream : ^0.0.7 <br /> mk-dirs : ^1.0.0 <br /> node-font-awesome : ^1.0.2 <br /> write : ^1.0.3  '); })(this.jQuery);