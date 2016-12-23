$(function() {

var contentBox = $('#contentBox');
var content;
 var i = 0;

console.log(pf.length);

 for(; i<pf.length; i++){
 	console.log(i);
 content = contentBox.append('<article class="content">');
 		student(i);
 }

function student(i){
		 $('.content').append('<h3>'+ pf[i].study+'</h3>');

     var j = 0;
     for(; j<pf[i].student.length; j++){
     	console.log(pf[i].student[j].link);
     $('.content').append('<div class="student">');
     $('.student').eq(j).append('<div class="web_img"><img>');
     $('.student').eq(j).append('<dl class="portfolio_info">');
		 $('.student').eq(j).find('img').attr({'src':pf[i].student[j].img, 'alt':pf[i].student[j].imgAlt});
     var studentLast = $('.student').find('dl').last();
     studentLast.append('<dt><strong>이름 :</strong>'+ pf[i].student[j].name +'</dt>');
     studentLast.append('<dd><strong>사이트 주소 :</strong>'+ pf[i].student[j].site +'</dd>');
     studentLast.append('<dd><strong>사용 프로그램 :</strong>'+ pf[i].student[j].useProgram +'</dd>');
     studentLast.append('<dd><strong>디바이스(해상도) :</strong>'+ pf[i].student[j].etc +'</dd>');



     studentLast.append('<dd><a>사이트<br /> 바로가기</a></dd>');
	   $('.student').eq(j).find('a').attr({"href":pf[i].student[j].link, "target":"_blank"});
	 }
	}
});

