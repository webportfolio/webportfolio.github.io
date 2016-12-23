$(function() {

var contentBox = $('#contentBox');
var content;
var i = 0;
var timed = 500;

// console.log(pf.length);

 for(; i<pf.length; i++){
 	// console.log(i);
 contentBox.append('<article class="content">');
 	student(i);
 }

function student(i){
	 $('.content').eq(i).append('<h3 class="view"><button type="button">'+ pf[i].study+'</button></h3>');

   var j = 0;
   for(; j<pf[i].student.length; j++){
   	// console.log(pf[i].student[j].link);
   $('.content').eq(i).append('<div class="student">');
   var content_student = $('.content').eq(i).find('.student');
   content_student.eq(j).append('<div class="web_img"><img>');
   content_student.eq(j).append('<dl class="portfolio_info">');
	 content_student.eq(j).find('img').attr({'src':pf[i].student[j].img, 'alt':pf[i].student[j].imgAlt});
   var studentLast = $('.student').find('dl').last();
   studentLast.append('<dt><strong>이름 :</strong><br />'+ pf[i].student[j].name +'</dt>');
   studentLast.append('<dd><strong>사이트 구분 :</strong><br />'+ pf[i].student[j].site +'</dd>');
   studentLast.append('<dd><strong>사용 프로그램 :</strong><br />'+ pf[i].student[j].useProgram +'</dd>');
   studentLast.append('<dd><strong>디바이스(해상도) :</strong><br />'+ pf[i].student[j].etc +'</dd>');



   studentLast.append('<dd><a>사이트<br /> 바로가기</a></dd>');
   content_student.eq(j).find('a').attr({"href":pf[i].student[j].link, "target":"_blank"});
	 }
}
var content = $('.content');
content.find('h3').removeClass('view').siblings('.student').hide();
content.eq(0).find('h3').addClass('view').siblings('.student').show();
// 
$('h3').css({cursor:'pointer'});
  $('h3').on('click', function(){
    var _$this = $(this);
    _$this.toggleClass('view');
    _$this.siblings('.student').slideToggle(timed);
    // $('h3').siblings('.student').hide();
// $('h3').addClass('view');
  });
});

