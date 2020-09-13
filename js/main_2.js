$(function(){
	let f_1 = false;
	let f_2 = false;



	// $('.zoom').click(()=>{
	// 	if(f_1 = !f_1){                                 	
	// 		$('.input').animate({'width':'165px'},200)
	// 		.css('opacity',1);
	// 	}else{
	// 		$('.input').animate({'width':'0px'},200,function(){
	// 			$(this).css('opacity',0);
	// 		});
	// 	}
	// });

	$('.shop').click(function(){
		if(f_2 = !f_2){                                 	
			$('.shop_list').animate({'height':'250px'},200)
			.css('border-width',1);
		}else{
			$('.shop_list').animate({'height':'0px'},200,function(){
				$(this).css('border-width',0);
			});
			
		}
	});


});