$(function(){
	let f_1 = false;
	let f_2 = false;
	let f_3 = false;
	let f_4 = false;
	let f_5 = false;
	let f_6 = false;
	let f_7 = false;
	console.dir('123');


	$('.zoom').click(function(){
		if(f_1 = !f_1){                                 	
			$('.input_wrap').animate({'width':'165px'},200);
		}else{
			$('.input_wrap').animate({'width':'0px'},200);
			
		}
	});

	$('.shop').click(function(){
		if(f_2 = !f_2){  
			$('.shop_list').animate({'height':'250px'},200,function(){
			$(this).css('border-width',1);
			});
		}else{
			$('.shop_list').animate({'height':'0px'},200,function(){
				$(this).css('border-width',0);
			});
		}
	});


// ================ ======================
$('.best_icon img').click(function(){
		let str_length=$(this).attr('src').length;
		// console.log(str_length);
		if(str_length < 17){                                 	

			let icon_str=$(this).attr('src');
			let newIcon=icon_str.substring(0,12)+'_1.jpg';
			// console.log(newIcon);
			$(this).attr('src',newIcon);
		}else{
			let icon_str=$(this).attr('src');
			let newIcon=icon_str.substring(0,12)+'.jpg';

			$(this).attr('src',newIcon);
		};

});
// =============== 漢堡 =====================
	var screen_Width=$(window).width(); //抓螢幕寬
	var screen_Height=$(window).height(); //抓螢幕高

	$('#line_nev').click(function(){
			$('.line_menu_warp').fadeIn();
	 });


	$('#line_nev').click(function(){
		if(f_7 = !f_7){                                 	
			$('.line_menu_warp').fadeIn();
			$('.material-icons').css('color','#fff');
		}else{
			$('.line_menu_warp').fadeOut();
			$('.material-icons').css('color','#000');
		}
	});

// ===========  special_text  ======================
	special_text();

	$(window).resize(function() {
		special_text();
	});

	function special_text(){	  
	  screen_Width = $(window).width(); //抓螢幕寬
		screen_Height = $(window).height(); //抓螢幕高

		if(screen_Width>800){
			$('.text_2').text('SPECIAL OFFERS');

		}else{
			$('.text_2').html('SPECIAL <br> OFFERS');

		}

		// .best_icon 置中
		let best_icon_w=$('.best_icon').width();
		let best_info_w=$('.best_info').width();
		let w_center=(best_info_w-best_icon_w) / 2;

		if(screen_Width >= 576 && screen_Width <= 980){
			$('.best_icon').css('right',w_center);
			// console.log(w_center);
		}else{
			$('.best_icon').css('right','15px');

		};

	};

});