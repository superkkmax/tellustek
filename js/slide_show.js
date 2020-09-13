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
    var timer = 3000; //  設定輪撥速度
    $(".slide").css("width", width_banner);

    //  當滑鼠移過時，圖片移動到特定位置
    for (i = 0; i < num_li; i++) {
        $(".products:eq(" + i + ")").mouseenter({
            id: i
        }, function(e) {
            n = e.data.id
            change();
        })
    }

    //  設定輪撥函數
    clock = setInterval(auto, timer);
    n = 0;

    function auto() {
        n++;
        if (n >= num_li) {
            n = 0;
        }
        position = -n * img_width;
        $(".slide").animate({
            "left": +position + "px"
        }, 400)

        // $(".nav li").css({
        //         "font-weight": "none",
        //         "color": "darkgray",
        //         "font-size": "16px",
        //         "border-bottom": "none"
        //     })
            //  讓滑鼠移到的清單改變成 hover 字體
        // $(".nav li:eq(" + n + ")").css({
        //     "font-weight": "bold",
        //     "color": "#0785d4",
        //     "font-size": "18px",
        //     "border-bottom": "4px solid #07A1D4"
        // });
        $(".products h4").css({"color": "#adadad"});
        $('.line span').css('background','#000');

        $(".products h4:eq(" + n + ")").css({"color": "#fff"});
        $(".line span:eq(" + n + ")").css('background',' #57c5a0');

    };

    //  當滑鼠移到圖案上時輪撥暫停
    $(".banner img").hover(function() {
        clearInterval(clock)
    }, function() {
        clock = setInterval(auto, timer)
    })

    //  當滑鼠移到 nav 時，根據標題移動圖片
    function change() {
        clearInterval(clock);
        clock = setInterval(auto, timer);
        position2 = -n * img_width;
        $(".slide").stop();
        $(".slide").animate({
                "left": +position2 + "px"
            }, 400)
            //  讓所有的清單變回原本的字體
        // $(".nav li").css({
        //         "font-weight": "none",
        //         "color": "darkgray",
        //         "font-size": "16px",
        //         "border-bottom": "none"
        //     })
            //  讓滑鼠移到的清單改變成 hover 字體
        // $(".nav li:eq(" + n + ")").css({
        //     "font-weight": "bold",
        //     "color": "#0785d4",
        //     "font-size": "18px",
        //     "border-bottom": "4px solid #07A1D4"
        // })
        $(".products h4").css({"color": "#adadad"});
        $('.line span').css('background','#000');

        $(".products h4:eq(" + n + ")").css({"color": "#fff"});
        $(".line span:eq(" + n + ")").css('background',' #57c5a0');

    };

});