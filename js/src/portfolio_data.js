
	var base = "./img/portfolio/";
	var missimg = "webpf_img.svg";  
	var suwon01 = base+"suwon_1606/";
	var suwon02 = base+"suwon_1612/";
	var suwon03 = base+"suwon_1705/";
	var gangnam1602 = base+"gangnam_1602";

	var imgAlt = "수강생 포트폴리오 이미지";
	var person = "개인포트폴리오 ";

	var useProgram = "Photoshop, illustrator, html, css, jQuery";
	var moreProgram = ", scss";
	var responsive = "mobile, tablet, pc (반응형 웹)";
	var pc ="pc"; 
	var pf = [
// study과정7 service web 170530-171030 ============================================================
		{"study":"2017.05 <br/>service webdesign UI/UX 과정",
		"student": // 김하영, 박새나, 안영란, 서보람, 이단비, 이수진, 이현준, 전혜빈
		[
      // 수강생_1: 김하영 사이트1 -----------------------------------------------------
			{"img":suwon03 + "hayoung.jpg",	"imgAlt":imgAlt+"김하영",
			"name":"김하영",
			"site":'ARTBOX',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://hiyoungkim.github.io/artbox/"},

		// 수강생_2: 박새나 사이트1 -----------------------------------------------------
			{"img":suwon03 + "saena.jpg",	"imgAlt":imgAlt+"animal",
			"name":"박새나",
			"site":'동물보호 관리',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://birdme0418.github.io/parksaena/"},
		// 수강생_2: 박새나 사이트2 -----------------------------------------------------
			{"img":suwon03 + "saena_02.jpg",	"imgAlt":imgAlt+"텀블벅",
			"name":"박새나",
			"site":'텀블벅',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://tumblbugproject.github.io/tumblbug"},
		// 수강생_3: 서보람 사이트1 -----------------------------------------------------
			{"img":suwon03 + "boram.jpg",	"imgAlt":imgAlt+"이케아",
			"name":"서보람",
			"site":'이케아',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://ramiportfolio.github.io/ikea_project/www/"},
			
		// 수강생_4: 안영란 사이트1 -----------------------------------------------------
			{"img":suwon03 + "youngran_01.jpg",	"imgAlt":imgAlt+"코카콜라",
			"name":"안영란",
			"site":'코카콜라',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://sarahsportfolio.github.io/cocaCola/"},		
	   // 수강생_4: 안영란 사이트2 -----------------------------------------------------
			{"img":suwon03 + "youngran_02.jpg",	"imgAlt":imgAlt+"온라인투어",
			"name":"안영란",
			"site":'온라인투어',
			"useProgram":useProgram + moreProgram,
			"etc":pc+"1920",
			"link":"https://sarahsportfolio.github.io/onlineTour/"},


		// 수강생_3: 이단비 사이트1 -----------------------------------------------------
			{"img":suwon03 + "danbi_01.jpg",	"imgAlt":imgAlt+"미샤",
			"name":"이단비",
			"site":'미샤',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://leedanbi.github.io/missha"},

		// 수강생_3: 이단비 사이트2 -----------------------------------------------------
			{"img":suwon03 + "danbi_02.jpg",	"imgAlt":imgAlt+"알라딘(인터넷서점)",
			"name":"이단비",
			"site":'알라딘(인터넷서점)',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://leedanbi.github.io/aladin/"},
			
		// 수강생_4: 이수진 사이트1 -----------------------------------------------------
			{"img":suwon03 + "sujin.jpg",	"imgAlt":imgAlt+"개인 포트폴리오 사이트",
			"name":"이수진",
			"site":'개인 포트폴리오 사이트',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://leesujini.github.io/my_portfolio_last/html/myportfolio.html"},
		
		// 수강생_5: 이현준 사이트1 -----------------------------------------------------
			{"img":suwon03 + "hyunjun_01.jpg",	"imgAlt":imgAlt+"게스",
			"name":"이현준",
			"site":'게스',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://hjund.github.io/guess/"},
		// 수강생_5: 이현준 사이트2 -----------------------------------------------------
			{"img":suwon03 + "hyunjun_02.jpg",	"imgAlt":imgAlt+"피자 알볼로",
			"name":"이현준",
			"site":'피자 알볼로',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://hjund.github.io/pizzaalvolo/"},
			
		// 수강생_6: 전혜빈 사이트1 -----------------------------------------------------
			{"img":suwon03 + "hyebin_01.jpg",	"imgAlt":imgAlt+"서브웨이",
			"name":"전혜빈",
			"site":'서브웨이',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://hyebinjeonportfolio.github.io/subway/html/main.html"},
			 
		// 수강생_6: 전혜빈 사이트2 -----------------------------------------------------
			{"img":suwon03 + "hyebin_02.jpg",	"imgAlt":imgAlt+"JYP 엔터테인먼트",
			"name":"전혜빈",
			"site":'JYP 엔터테인먼트',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://hyebinjeonportfolio.github.io/jyp/"},
			
		]}, 


	// study과정6 mobile uiux 161230-170526 ============================================================
		{"study":"2016.12 <br/>Mobile UI/UX 과정",
		"student": // 임호, 박소정, 김미례, 안민지, 박윤서, 임나현,  김세미
		[
      // 수강생_1: 임호 사이트1 -----------------------------------------------------
			{"img":suwon02 + "limho.jpg",	"imgAlt":imgAlt+"임호",
			"name":"임호",
			"site":'포트폴리오 개인사이트',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://limhoooo.github.io/"},
//		// 수강생_1: 임호 사이트1 -----------------------------------------------------
//			{"img":suwon02 + "limho1.jpg",	"imgAlt":imgAlt+"임호",
//			"name":"임호",
//			"site":'가구브랜드 BENS',
//			"useProgram":useProgram,
//			"etc":pc,
//			"link":"https://limhoooo.github.io/portfolio/bens/"},
//		// 수강생_1: 임호 사이트2 -----------------------------------------------------
//			{"img":suwon02 + "limho2.jpg",	"imgAlt":imgAlt+"카스",
//			"name":"임호",
//			"site":'CASS 프로모션',
//			"useProgram":useProgram,
//			"etc":pc,
//			"link":"https://limhoooo.github.io/portfolio/cass/"},

		// 수강생_2: 박소정 사이트1 -----------------------------------------------------
			{"img":suwon02 + "sojeong1.jpg",	"imgAlt":imgAlt+"경복궁",
			"name":"박소정",
			"site":'경복궁',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://sojeongweb.github.io/portfolio/project_01_Gyeongbokgung/www/html/main.html"},
		// 수강생_2: 박소정 사이트2 -----------------------------------------------------
			{"img":suwon02 + "sojeong2.jpg",	"imgAlt":imgAlt+"언노운 보드대회",
			"name":"박소정",
			"site":'언노운보드대회 프로모션',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://sojeongweb.github.io/portfolio/project_03_unknown/www/www/html/main.html"},
			
		// 수강생_3: 김미례 사이트1 -----------------------------------------------------
			{"img":suwon02 + "mirye1.jpg",	"imgAlt":imgAlt+"육아지원센터",
			"name":"김미례",
			"site":'중앙육아 종합지원센터',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://miryepf.github.io/childcare_redesign/html/main.html"},
		// 수강생_3: 김미례 사이트2 -----------------------------------------------------
			{"img":suwon02 + "mirye2.jpg",	"imgAlt":imgAlt+"아람미술관",
			"name":"김미례",
			"site":'아람미술관 프로모션',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://miryepf.github.io/promotion_page/html/promotion.html"},
			
		// 수강생_4: 안민지 사이트1 -----------------------------------------------------
			{"img":suwon02 + "minji.jpg",	"imgAlt":imgAlt+"에스티로더",
			"name":"안민지",
			"site":'에스티로더',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://minjiweb.github.io/portfolio/esteeLauder/html/estee_lauder_main.html"},
		
		// 수강생_5: 박윤서 사이트1 -----------------------------------------------------
			{"img":suwon02 + "yoonseo.jpg",	"imgAlt":imgAlt+"베가",
			"name":"박윤서",
			"site":'핸드폰제조회사 베가',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://parkbbang.github.io/portfolio/vega/html/vega_main.html"},
			
		// 수강생_6: 임나현 사이트1 -----------------------------------------------------
			{"img":suwon02 + "nahyeon.jpg",	"imgAlt":imgAlt+"종묘",
			"name":"임나현",
			"site":'종묘 프로모션',
			"useProgram":useProgram + moreProgram,
			"etc":pc,
			"link":"https://nahyeonweb.github.io/portfolio/cultureDay/html/jongmyo_main.html"},
			
		// 수강생_7: 김세미 사이트1 -----------------------------------------------------
			{"img":suwon02 + "semi.jpg",	"imgAlt":imgAlt+"디저트페어",
			"name":"김세미",
			"site":'디저트페어 프로모션',
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://s2meweb.github.io/portfolio/dessert/html/dessertfair.html"},
			
		
		]}, 
// study과정5 ============================================================
		{"study":"2016.06 <br/>Mobile UI/UX 과정",
		"student":
		[
		// 수강생_1: 이재영 -----------------------------------------------------
			{"img":suwon01 + "leejy.jpg",	"imgAlt":imgAlt,
			"name":"이재영",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"https://wodud222.github.io"},
		// 수강생_2: 윤혜림 -----------------------------------------------------
			{"img":suwon01 + "yunherim.jpg",	"imgAlt":imgAlt,
			"name":"윤혜림",
			"site":"미샤 리뉴얼",
			"useProgram":useProgram,
			"etc":responsive,
			"link":"https://yunhyerim.github.io"},
		// 수강생_3: 변은진 -----------------------------------------------------
			{"img":suwon01 + "byunej.jpg",	"imgAlt":imgAlt,
			"name":"변은진",
			"site":person,
			"useProgram":useProgram,
			"etc":"pc",
			"link":"https://byunej.github.io/"},
		// 수강생_4: 김지현 -----------------------------------------------------
			{"img":suwon01 + "kimjh.jpg",	"imgAlt":imgAlt,
			"name":"김지현",
			"site":"새마을 식당 리뉴얼",
			"useProgram":useProgram,
			"etc":pc,
			"link":"https://kimjih26.github.io"},
		// 수강생_5: 이은영 -----------------------------------------------------
			{"img":suwon01 + "leeej.jpg",	"imgAlt":imgAlt,
			"name":"이은영",
			"site":person,
			"useProgram":"Photoshop, illustrator, html, css, jQuery",
			"etc":"pc",
			"link":"https://papillion8.github.io"},
		// 수강생_6: 홍은지 -----------------------------------------------------
			{"img":suwon01 + "hongej.jpg",	"imgAlt":imgAlt,
			"name":"홍은지",
			"site":person,
			"useProgram":"Photoshop, illustrator, html, css, jQuery",
			"etc":pc,
			"link":"https://honglama.github.io/pf/"},
		// 수강생_7: 유혜인 -----------------------------------------------------
			{"img":suwon01 + "youhi.jpg",	"imgAlt":imgAlt,
			"name":"유혜인",
			"site":"토니모리 리뉴얼",
			"useProgram":responsive,
			"etc":pc,
			"link":"https://youhyein.github.io/tonymoly"},
		// 수강생_8: 이재형 -----------------------------------------------------
			{"img":suwon01 + "leejh.jpg",	"imgAlt":imgAlt,
			"name":"이재형",
			"site":"리바이스 리뉴얼",
			"useProgram":"Photoshop, illustrator, html, css, jQuery",
			"etc":pc,
			"link":"https://puky1027.github.io/"},
		// 수강생_9: 김지수 -----------------------------------------------------
			{"img":suwon01 + "kimjs.jpg",	"imgAlt":imgAlt,
			"name":"김지수",
			"site":"디자인 웨딩",
			"useProgram":"Photoshop, illustrator, html, css, jQuery",
			"etc":pc,
			"link":"https://rlawltn5891.github.io/www/"},
		// 수강생_10: 현주희 -----------------------------------------------------
			// {"img":suwon01 + "test_02.jpg",	"imgAlt":imgAlt,
			// "name":"현주희",
			// "site":"개인포트폴리오 페이지",
			// "useProgram":"Photoshop, illustrator, html, css, jQuery",
			// "etc":pc,
			// "link":"http://"},
		]}, 

// study과정4 ============================================================
		{"study":"2016.02 <br/>Webdesign 과정",
		"student":
		[
		// 수강생_1: 정소담 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"정소담",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://damso0204.dothome.co.kr "},
		// 수강생_2: 김지선 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"김지선",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kimjs9105.github.io"},
		// 수강생_3: 최형선 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"최형선",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://hyungsun.github.io/"},
		// 수강생_4: 이혜정 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"이혜정",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://falkore.dothome.co.kr/"},
		// 수강생_5: 김은혜 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"김은혜",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://catwitch.dothome.co.kr/"},
		// 수강생_6: 김민선 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"김민선",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kimminseon.github.io/alstjs1595"},
		// 수강생_7: 김슬기 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"김슬기",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://tmfrldbsrn.dothome.co.kr"},
		// 수강생_8: 간은선 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"간은선",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kaneunsun.dothome.co.kr/"},
		// 수강생_9: 조은진 -----------------------------------------------------	
			{"img":/*gangnam1602 + */base + missimg,	"imgAlt":imgAlt,
			"name":"조은진",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://dmswls1903.github.io/dmswls1903/"}
			]},
// study과정3 ============================================================	
			{"study":"2016.03 <br/>Webdesign 과정",
		"student":
		[
		// 수강생_1: 이희애 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"이희애",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://heeae0302.dothome.co.kr/"},
		// 수강생_2: 이승엽 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"이승엽",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://suql0702.dothome.co.kr"},
		// 수강생_3: 황진경 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"황진경",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://hwangjk711.github.io/"},
		// 수강생_4: 김미나 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"김미나",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kke0807.github.io/"},
		// 수강생_5: 신종원 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"신종원",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://mnweb.dothome.co.kr/"},
		// 수강생_6: 박세용 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"박세용",
			"site":"YMC entertainment 리뉴얼",
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://seyong0290.dothome.co.kr/"},
		// 수강생_7: 최윤혜 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"최윤혜",
			"site":"Ziwi peak(애완동물 식재료) 리뉴얼",
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://kommang4.dothome.co.kr/"},
		// 수강생_8: 송예빈 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"송예빈",
			"site":person,
			"useProgram":useProgram,
			"etc":pc,
			"link":"http://songyebin.github.io/"},
		]},
// study과정2 ============================================================	
			{"study":"2015.06 <br/>Webdesign 과정",
		"student":
		[
		// 수강생_1: 이선주 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"이선주",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://gngn97.dothome.co.kr/"},
		// 수강생_2: 김지혜 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"김지혜",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kjh9207.dothome.co.kr/"},
		// 수강생_3: 김지혜 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"김지혜",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://kjh9207.dothome.co.kr/"},
		// 수강생_4: 유주원 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"유주원",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://silbap.dothome.co.kr/"},
			]},
// study과정1 ============================================================	
		{"study":"2015.05 <br/>Webdesign 과정",
		"student":
		[
		// 수강생_1: 이선주 -----------------------------------------------------
			{"img":/*gangnam1602 +*/ base + missimg,	"imgAlt":imgAlt,
			"name":"이선주",
			"site":person,
			"useProgram":useProgram,
			"etc":responsive,
			"link":"http://gngn97.dothome.co.kr/"},
			]}
	];  


