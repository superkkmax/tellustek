$(document).ready(function() {



    var screen_Width = $(window).width(); //抓螢幕寬
    var screen_Height = $(window).height(); //抓螢幕高
    var img_width;
    var img_h;

    if(screen_Width>=940){
      img_width = 940;
    }else{
      img_width=screen_Width;  
    }
    console.log(img_width);

       if(screen_Width < 940){
          $('.banner').css('width',screen_Width+'px');
          console.log('123');
        };

    $(window).resize(function() {
        if(screen_Width<=575){
          let img_h=$('.banner').height()+20;
          $(".slide_wrap").css("height",img_h+"px");
       }else if(screen_Width >= 576 && screen_Width <=991 ){
          $(".slide_wrap").css("height","380px");
       }else{
          $(".slide_wrap").css("height","460px");
       };

       if(screen_Width < 940){
          $('.banner').css('width',screen_Width+'px');
          console.log('123');
        }else{
          $('.banner').css('width','50%');

        }

     });

    var num_li = 5;
    var width_banner = num_li*img_width;
    $(".slide").css("width", width_banner+'px');

    $(window).click(()=>{
              $(".slide").animate({
            "left": "-768px"
        }, 400)
            });


});