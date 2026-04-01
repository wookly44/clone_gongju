$(document).ready(function(){

    $('.container').each(function(){
        const $container = $(this); 
        let isMoving = false;

        // 자동 슬라이드
        let slideTimer;
        function autoSlide(){
            slideTimer = setInterval(function(){
                $container.find('.next').click();
            }, 2500);
        }
        autoSlide();

        // next 버튼
        $container.find('.next').click(function(){
            if(isMoving == true) return;
            isMoving = true;
        
            let firstWid = $container.find('.slide').eq(0).outerWidth();

            $container.find('.slide_box').animate({marginLeft: `-${firstWid}px`}, 500, function(){
                $container.find('.slide_box').append($container.find('.slide').first());
                $container.find('.slide_box').css('marginLeft', '0');
                isMoving = false;
            });
        });

        // prev 버튼
        $container.find('.prev').click(function(){
            if(isMoving == true) return;
            isMoving = true;
        
            let firstWid = $container.find('.slide').eq(0).outerWidth();
            
            $container.find('.slide_box').prepend($container.find('.slide').last());

            $container.find('.slide_box').css('marginLeft', `-${firstWid}px`);

            $container.find('.slide_box').animate({marginLeft: '0'}, 500, function(){
                isMoving = false;
            });
        });
        
        // pause 버튼
        $container.find('.pause').click(function(){
            if($(this).hasClass('on')){
                // 재생
                $(this).removeClass('on');
                autoSlide();
            } else {
                // 정지
                $(this).addClass('on');
                clearInterval(slideTimer);
            }
        });
        
    });
});


