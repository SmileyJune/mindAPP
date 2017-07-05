$(function(){
    $(".iText").click(function(){
    	$(".cover").fadeOut(500);
    	$(".home").fadeIn(500);
    });

    
    $(".poke").click(function(){
    	$(".home").fadeOut(500);
    	$(".inletCon").fadeIn(500);
    });

    /*点击弹出年龄框*/
    $(".choose1").click(function(){
    	$(".popYear").fadeIn(500);
    });
    $(".popYear").click(function(){
    	$(".popYear").fadeOut(500);
    });
    $(".popBg").click(function(){
    	return false;
    });

    /*点击更换年龄*/
    $("#Yimg1").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img1.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });
    $("#Yimg2").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img2.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });
    $("#Yimg3").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img3.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });
    $("#Yimg4").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img4.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });
    $("#Yimg5").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img5.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });
    $("#Yimg6").click(function(){
        $("#yearImg").attr({
        	"src":"./img/year_img6.png",
        	"backgroundColor":"yellow"
        });
        $(".popYear").fadeOut(500);
    });

    //点击弹出星座框
    $(".choose2").click(function(){
    	$(".popStar").fadeIn(500);
    });
    $(".popStar").click(function(){
    	$(".popStar").fadeOut(500);
    });
    $(".popBg1").click(function(){
    	return false;
    });

    //点击更换星座
    $("#Simg1").click(function(){
    	$("#starImg").attr({
    		"src":"./img/star_img1.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg2").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img2.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg3").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img3.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg4").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img4.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg5").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img5.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg6").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img6.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg7").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img7.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg8").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img8.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg9").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img9.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg10").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img10.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg11").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img11.png"
    	});
    	$(".popStar").fadeOut(500);
    });
    $("#Simg12").click(function(){
    	$("#starImg").attr({
    		src:"./img/star_img12.png"
    	});
    	$(".popStar").fadeOut(500);
    });


    $(".girlIn").click(function(){
    	$(".inletCon").fadeOut(500);
    	$(".question").fadeIn(500);
    });

    $(".boyIn").click(function(){
    	$(".inletCon").fadeOut(500);
    	$(".question").fadeIn(500);
    });

    $(".Qchoose0").click(function(){
         $(".Qchoose0").css({
         	opacity:1
         });
         $(".next").css({
         	opacity:1
         });
         $(".Qchoose0").siblings().css({
         	opacity:0.4
         });
    });
    $(".Qchoose1").click(function(){
         $(".Qchoose1").css({
         	opacity:1
         });
         $(".next").css({
         	opacity:1
         });
         $(".Qchoose1").siblings().css({
         	opacity:0.4
         });
    });
    $(".Qchoose2").click(function(){
         $(".Qchoose2").css({
         	opacity:1
         });
         $(".next").css({
         	opacity:1
         });
         $(".Qchoose2").siblings().css({
         	opacity:0.4
         });
    });
    $(".Qchoose3").click(function(){
         $(".Qchoose3").css({
         	opacity:1
         });
         $(".next").css({
         	opacity:1
         });
         $(".Qchoose3").siblings().css({
         	opacity:0.4
         });
    });
    $(".next").click(function(){
        $(".quesCho").children().css({
            opacity:0.4
        });
    });


    var text={
    	tests:[
            {
            	question:"1.你有独立的判断能力！",
            	score:[0,4,8,12]
            },
            {
            	question:"2.你很喜欢幻想！",
            	score:[0,4,8,12]
            },
            {
            	question:"3.你不做完自己的事不罢休！",
            	score:[0,4,8,12]
            },
            {
            	question:"4.你有幽默细胞！",
            	score:[0,4,8,12]
            },
            {
            	question:"5.你有时候很感性！",
            	score:[0,4,8,12]
            },
            {
            	question:"6.你面对事情能沉着应对！",
            	score:[0,4,8,12]
            },
            {
            	question:"7.你有好多朋友！",
            	score:[0,4,8,12]
            },
            {
            	question:"8.你喜欢幻想！",
            	score:[0,4,8,12]
            },
            {
            	question:"9.你重情义！",
            	score:[0,4,8,12]
            },
            {
            	question:"10.你觉得自己很完美！",
            	score:[0,4,8,12]
            },
    	   ],
    	result:[
            "100分以上：意志力强，头脑冷静，有较强的领导欲，事业心强，不达目的不罢休。",
			"80分—99分：聪明，性格活泼，人缘好，善于交朋友，心机较深。",
			"50分－79分：爱幻想，思维较感性，以是否与自己投缘为标准来选择朋友。",
			"30分－49分：性情温良，重友谊，性格踏实稳重，但有时也比较狡黠。",
			"30分以下：爱玩，富于幻想。聪明机灵，待人热情，爱交朋友。"
    	    ]
    }


    var num = 0;
    var zongfen = 0;
    var jieguo = "";
    var ii=true;
    var zongfen1;
     var Width=0;
    createQue();
    function createQue(){
        /*console.log(text);*/
        $(".quesBg p").text(text.tests[num].question);
        for (var i=0; i<text.tests[num].length; i++) {
            text.tests[num];
        }
    }

    $(".quesCho div").click(function(e){
        /*console.log($(this).attr("class")[7]);*/
        zongfen1 = text.tests[num].score[$(this).attr("class")[7]];
        ii=false;
    })


    $(".next").click(function(){
        if (ii) {
           return true;
        }else{
             num++;
             if (num==10) {
                alert("您的最终得分是"+zongfen);
             }else{
                createQue();
         }
         $(this).css({opacity:0.4})
         ii = true;
         zongfen += zongfen1; 
        }

        /*console.log(text.tests[num-1]);*/
        /*console.log(num);*/
        $(".quseBar p").text(num);
       

        Width +=10;
        /*console.log(Width);*/
        $(".bar div").css({
            width:Width+"%"
        });

    })
    




})