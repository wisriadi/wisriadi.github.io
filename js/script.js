

$('.page-scroll').on('click', function(e) {
    const tujuan = $(this).attr('href');
    const elemenTujuan = $(tujuan);
    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1250, 'easeInOutExpo');
    
    e.preventDevaul();
});




$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});






$(window).scroll(function() {
    const  wSscroll = $(this).scrollTop();

    $('.jumbotron img ').css({
        'transform' : 'translate(0px, '+ wSscroll/4 +'%)'
    });

    $('.jumbotron h1 ').css({
        'transform' : 'translate(0px, '+ wSscroll/2 +'%)'  
    });

    $('.jumbotron p ').css({
        'transform' : 'translate(0px, '+ wSscroll/1.2 +'%)'  
    });




// portfolio
    if( wSscroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .thumbnail').each(function(i) { //(i) untuk meluping index-nya 

            setTimeout(() => {

                $('.portfolio .thumbnail').eq(i).addClass('muncul'); 
                
            }, 500 * (i+1));
        });
    }
});

