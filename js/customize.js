// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

});


/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
$(function() {
    $('#modal1').hide();//先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal1').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);

});

$(function() {
    $('#modal2').hide();//先隱藏視窗
    $('.modal2').after('<div class="modal_overlay2"></div>'); //新增透明底
    $('.modal2').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay2').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal2').click(function(e) {
        $('.modal_overlay2').fadeIn(100);
        $('.modal2').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal2').hide();
        $('.modal_overlay2').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay2').click(closeModal);
    $('.modal2 .close').click(closeModal);

});

$(function() {
    $('#modal3').hide();//先隱藏視窗
    $('.modal3').after('<div class="modal_overlay3"></div>'); //新增透明底
    $('.modal3').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay3').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal3').click(function(e) {
        $('.modal_overlay3').fadeIn(100);
        $('.modal3').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal3').hide();
        $('.modal_overlay3').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay3').click(closeModal);
    $('.modal3 .close').click(closeModal);

});

$(function() {
    $('#modal4').hide();//先隱藏視窗
    $('.modal4').after('<div class="modal_overlay4"></div>'); //新增透明底
    $('.modal4').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay4').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal4').click(function(e) {
        $('.modal_overlay4').fadeIn(100);
        $('.modal4').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal4').hide();
        $('.modal_overlay4').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay4').click(closeModal);
    $('.modal4 .close').click(closeModal);

});

$(function() {
    $('#modal5').hide();//先隱藏視窗
    $('.modal5').after('<div class="modal_overlay5"></div>'); //新增透明底
    $('.modal5').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay5').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal5').click(function(e) {
        $('.modal_overlay5').fadeIn(100);
        $('.modal5').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal5').hide();
        $('.modal_overlay5').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay5').click(closeModal);
    $('.modal5 .close').click(closeModal);


});

$(function() {
    $('#modal5-1').hide();//先隱藏視窗
    $('.modal5-1').after('<div class="modal_overlay5-1"></div>'); //新增透明底
    $('.modal5-1').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay5-1').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal5-1').click(function(e) {
        $('.modal_overlay5-1').fadeIn(100);
        $('.modal5-1').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal5-1').hide();
        $('.modal_overlay5-1').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay5-1').click(closeModal);
    $('.modal5-1 .close').click(closeModal);
    $('#openModal5-1').click(function(){
        $('#modal5').hide();
    })

});

$(function() {
    $('#modal5-2').hide();//先隱藏視窗
    $('.modal5-2').after('<div class="modal_overlay5-2"></div>'); //新增透明底
    $('.modal5-2').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay5-2').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal5-2').click(function(e) {
        $('.modal_overlay5-2').fadeIn(100);
        $('.modal5-2').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal5-2').hide();
        $('.modal_overlay5-2').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay5-2').click(closeModal);
    $('.modal5-2 .close').click(closeModal);
    $('#openModal5-2').click(function(){
        $('#modal5').hide();
    })

});





$(function() {
    $('#modal6').hide();//先隱藏視窗
    $('.modal6').after('<div class="modal_overlay6"></div>'); //新增透明底
    $('.modal6').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay6').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal6').click(function(e) {
        $('.modal_overlay6').fadeIn(100);
        $('.modal6').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal6').hide();
        $('.modal_overlay6').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay6').click(closeModal);
    $('.modal6 .close').click(closeModal);
    $('#openModal6').click(function(){
        $('#modal6-1').hide();
    })

});

$(function() {
    $('#modal6-1').hide();//先隱藏視窗
    $('.modal6-1').after('<div class="modal_overlay6-1"></div>'); //新增透明底
    $('.modal6-1').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay6-1').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal6-1').click(function(e) {
        $('.modal_overlay6-1').fadeIn(100);
        $('.modal6-1').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal6-1').hide();
        $('.modal_overlay6-1').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay6-1').click(closeModal);
    $('.modal6-1 .close').click(closeModal);
    $('#openModal6-1').click(function(){
        $('#modal6').hide();
    })

});

$(function() {
    $('#modal7').hide();//先隱藏視窗
    $('.modal7').after('<div class="modal_overlay7"></div>'); //新增透明底
    $('.modal7').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay7').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal7').click(function(e) {
        $('.modal_overlay7').fadeIn(100);
        $('.modal7').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal7').hide();
        $('.modal_overlay7').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay7').click(closeModal);
    $('.modal7 .close').click(closeModal);

});

$(function() {
    $('#modal8').hide();//先隱藏視窗
    $('.modal8').after('<div class="modal_overlay8"></div>'); //新增透明底
    $('.modal8').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay8').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal8').click(function(e) {
        $('.modal_overlay8').fadeIn(100);
        $('.modal8').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal8').hide();
        $('.modal_overlay8').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay8').click(closeModal);
    $('.modal8 .close').click(closeModal);

});

$(function() {
    $('#modal9').hide();//先隱藏視窗
    $('.modal9').after('<div class="modal_overlay9"></div>'); //新增透明底
    $('.modal9').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay9').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal9').click(function(e) {
        $('.modal_overlay9').fadeIn(100);
        $('.modal9').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal9').hide();
        $('.modal_overlay9').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay9').click(closeModal);
    $('.modal9 .close').click(closeModal);

});

$(function() {
    $('#modal10').hide();//先隱藏視窗
    $('.modal10').after('<div class="modal_overlay10"></div>'); //新增透明底
    $('.modal10').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay10').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal10').click(function(e) {
        $('.modal_overlay10').fadeIn(100);
        $('.modal10').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal10').hide();
        $('.modal_overlay10').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay10').click(closeModal);
    $('.modal10 .close').click(closeModal);

    $('#openModal11').click(function(){
        $('#modal10').hide();
    })


});


$(function() {
    $('#modal11').hide();//先隱藏視窗
    $('.modal11').after('<div class="modal_overlay11"></div>'); //新增透明底
    $('.modal11').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay11').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal11').click(function(e) {
        $('.modal_overlay11').fadeIn(100);
        $('.modal11').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal11').hide();
        $('.modal_overlay11').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay11').click(closeModal);
    $('.modal11 .close').click(closeModal);

});



//searchbox

$(document).ready(function(){
    $(".searchbox .btn-toggle").click(function(){
        $(".sform").slideToggle();
    });
});

$('.searchbox .btn-toggle').click(function(e) {
    $(this).parent('.container').slideToggle(function() {
        if ($(this).is(':visible')) {
            $('.searchbox .btn-toggle').html("收合/CLOSE");
            $('.searchbox .btn-toggle').attr('name', '收合選單/CLOSE');
        } else {
            $('.searchbox .btn-toggle').html("展開/OPEN");
            $('.searchbox .btn-toggle').attr('name', '展開選單/OPEN');
        }
    });
    $(this).stop(true, true).toggleClass('close');
});

//ON(OFF)
$(function(){
    $('.switch .on').click(function(){
        $('.switch .on').hide();
        $('.switch .off').show();
    })
    $('.switch .off').click(function(){
        $('.switch .off').hide();
        $('.switch .on').show();
    })
})

//ON(OFF)
// $(function(){
//     $('.switch2 .on').click(function(){
//         $('.switch2 .on').hide();
//         $('.switch2 .off').show();
//     })
//     $('.switch2 .off').click(function(){
//         $('.switch2 .off').hide();
//         $('.switch2 .on').show();
//     })
// })

//狀態篩選手機
$(function(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
      } 
  });
  }
})

//
$(function(){

    if ($('.marquee').length > 0) {
        $('.marquee ul').slick({
            dots: false,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            speed: 300,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        focusOnSelect: true,
    });
    }
    
})


