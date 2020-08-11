
$(document).ready(function(){

    const activeSlider = (slider, item, index) => {
        $(slider).each(function(_, e){
            if ($(e).find(item).length > index) {
                $(e).find(item).css('margin', '0');
                $(e).slick({
                    infinite: true,
                    slidesToShow: index,
                    prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fcd0c4"/></svg></div>',
                    nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fcd0c4"/></svg></div>',
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1005,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '60px',
                                infinite: true,
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                                arrows: false,
                                centerPadding: '180px',
                                slidesToShow: 1,
                                centerMode: true
                            }
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                arrows: false,
                                centerPadding: '100px',
                                slidesToShow: 1,
                                centerMode: true
                            }
                        }
                        ,
                        {
                            breakpoint: 640,
                            settings: {
                                arrows: false,
                                centerPadding: '50px',
                                slidesToShow: 1,
                                centerMode: true
                            }
                        }
                      ]
                });
            } else if($(e).find(item).length < 2) {
                $(e).find(item).css('margin', '0');
            }
        });
    }

    if(document.body.clientWidth  < 768) {
        activeSlider($('.snacks__list'),$('.snacks__list__item'),2);
        activeSlider($('.suace_slider'),$('.suace_slider_item'),2);
    } 
    if(document.body.clientWidth  < 580) {
        $('.mini_list').each(function(_, e){
            if ($(e).find('.mini_list_item').length > 1) {
                $(e).find('.mini_list_item').css('margin', '0');
                $(e).slick({
                    slidesToShow: 1,
                    infinite: false,
                    arrows: false,
                    centerPadding: '50px',
                    prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fcd0c4"/></svg></div>',
                    nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fcd0c4"/></svg></div>',
                    slidesToScroll: 1
                });
            }
        });
    }

    activeSlider($('.snacks__list'),$('.snacks__list__item'),4);
    activeSlider($('.suace_slider'),$('.suace_slider_item'),3);
    
    // Active LightBox
    $('.menu__list__item__img').lightzoom({
        isOverlayClickClosing: true,
        isEscClosing: true,
        imgPadding: 50
    });

  });
