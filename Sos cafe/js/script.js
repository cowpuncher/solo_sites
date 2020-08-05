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
    if($('.snacks__list__item').length > 4) {
        $('.snacks__list').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    }
    if($('.snacks__list__item').length == 1) {
        $('.snacks__list__item').css('margin', '0')
    }
  });
