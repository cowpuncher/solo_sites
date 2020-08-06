// function newsFullHeight() {
//     if ($(window).width() > 767) {
//         if ($('.news_list__wrap')) {
//             var newsListItem = $('.news_list__wrap').find('.news_list__item');
//             var widthNew = $('.news_list__wrap').width() / 3;
//             widthNew = widthNew + widthNew;
//             newsListItem.map(function () {
//                 $(this).css({'height': widthNew + 'px'});
//             });
//         }
//     }
// }

// function toogleMenu() {
//     $('#toggle').toggleClass('active');
//     $('#overlay').toggleClass('open');
// }

// function resizeBoxContent() {
//     if ($(window).width() > 770) {
//         var width = ($('.box_content').width() / 100) * 90;
//         $('.box_content').css({
//             height : width + 'px'
//         });
//         $('.social_box_item').css({
//             height : width / 4 + 'px'
//         });
//         if ($('.about_info_pic')) {
//             var widthAboutInfoPic = $('.about_info_pic').width();
//             $('.about_info_pic').css({
//                 height : (widthAboutInfoPic / 2) + 'px'
//             });
//         }
//         if ($('.last_news')) {
//             var widthAboutInfoPic = $('.last_news').width();
//             $('.last_news').css({
//                 height : (widthAboutInfoPic / 3) + 'px'
//             });
//         }
//     } else {
//         var width = $(window).width();
//         $('.social_box .social_box_item').css({
//             height : (width / 2) + 'px'
//         })
//     }
// }

// (function() {
//     'use strict';
//     $(window).on('scroll', function() {
//         var _scrollTop = $(this).scrollTop();
//         if (_scrollTop < $('.header_main').height()) {
//             $('.header_bg').css({
//                 transform : 'translate3d(0px,' + $(window).scrollTop() * 0.2 + 'px,0px) scale(1.1)'
//             });
//         } else {
//             return true;
//         }
//         if ($('.menu_sub-menu')) {
//             if (_scrollTop > 0) {
//                 $('.menu_sub-menu').addClass('box-shadow');
//             } else {
//                 $('.menu_sub-menu').removeClass('box-shadow');
//             }
//         }
//     });
//     $('.box_news-owl-carousel').owlCarousel({
//         loop : false,
//         margin : 0,
//         nav : true,
//         items : 1,
//         lazyLoad : true,
//         autoplay : true,
//     });
//     if ($(window).width() > 480 && window.location.href.indexOf('inretiors') + 1) {
//         var elem = document.querySelector('.grid');
//         var msnry = new Masonry(elem, {
//             // options
//             // gutter: 10,
//             percentPosition : true,
//             itemSelector : '.promo_list_item',
//             // columnWidth: 200
//         });
//     }
//     if ($(window).width() < 480) {
//         $('.more-items-list').owlCarousel({
//             loop : true,
//             margin : 0,
//             nav : true,
//             lazyLoad : true,
//             items : 1
//         });
//     }
//     $('#fixed-modal-close').on('click', function(e) {
//         e.preventDefault();
//         $('#fixed-modal').hide();
//     });
//     $('.news_photo_slide-owl-carousel').owlCarousel({
//         loop : true,
//         margin : 0,
//         nav : false,
//         responsiveClass : true,
//         responsive : {
//             0 : {
//                 items : 1,
//             },
//             600 : {
//                 items : 3,
//             },
//             1024 : {
//                 items : 6,
//             }
//         }
//     });
//     newsFullHeight();
//     $(window).on('resize', function() {
//         resizeBoxContent();
//         newsFullHeight();
//     });
//     resizeBoxContent();

//     $(document).on('click', '#toggle', function() {
//         toogleMenu();
//     });
//     $('#overlay').click(function(e) {
//         if ($(e.target).hasClass('overlay')) {
//             toogleMenu();
//         }
//     });
//     $(document).keyup(function(e) {
//         if (e.keyCode == 27 && $('#overlay').hasClass('open')) {// escape key maps to keycode `27`
//             toogleMenu();
//         }
//     });
// })();
$(document).ready(function(){

    // $('.snacks__list').each(function(_, e){
    //     if ($(e).find('.snacks__list__item').length > 4) {
            
    //         $(e).find('.snacks__list__item').css('margin', '0');
    //         $(e).slick({
    //             infinite: true,
    //             slidesToShow: 4,
    //             slidesToScroll: 1
    //         });
    //     } else if($(e).find('.snacks__list__item').length < 2) {
    //         $(e).find('.snacks__list__item').css('margin', '0');
    //     }
    // });

    // $('.suace_slider').each(function(_, e){
    //     let items = $('.suace_slider_item');
        
    //     if ($(e).find(items).length > 3) {
    //         $(e).find(items).css('margin', '0');
    //         $(e).slick({
    //             infinite: true,
    //             slidesToShow: 3,
    //             slidesToScroll: 1
    //         });
    //     } else if($(e).find(items).length < 2) {
    //         $(e).find(items).css('margin', '0');
    //     }
    // });

    const activeSlider = (slider, item, index) => {
        $(slider).each(function(_, e){
            if ($(e).find(item).length > index) {
                
                $(e).find(item).css('margin', '0');
                $(e).slick({
                    infinite: true,
                    slidesToShow: index,
                    prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fcd0c4"/></svg></div>',
                    nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path class="pathColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fcd0c4"/></svg></div>',
                    slidesToScroll: 1
                });
            } else if($(e).find(item).length < 2) {
                $(e).find(item).css('margin', '0');
            }
        });
    }

    activeSlider($('.snacks__list'),$('.snacks__list__item'),4);
    activeSlider($('.suace_slider'),$('.suace_slider_item'),3);
    

  });
