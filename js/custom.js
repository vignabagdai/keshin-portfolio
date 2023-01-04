$(document).ready(function () {

    $(function () {
        $(".navbar-toggler").on("click", function (e) {
            $("body").toggleClass("openMenu");
            e.stopPropagation()
        });
        // $(document).on("click", function (e) {
        //     if ($(e.target).is(".navbar-toggler") === false) {
        //         $("body").removeClass("openMenu");
        //     }
        //     e.stopPropagation()
        // });

        
    });

    // (function($) {
    //     var attr = $('.navbar-toggler').attr('aria-expanded');
    //     if (typeof attr !== typeof undefined && attr !== false) {
    //             $('body').addClass('openMenu');
    //     }
    //     if (typeof attr !== typeof undefined && attr !== true) {
    //         $('body').removeClass('openMenu');
    //     }
    // })(jQuery);

    // (function ($) {
    //     var attr = $('.navbar-toggler').attr('aria-expanded');
    //     if ($('.navbar-toggler').attr('aria-expanded') === 'true') {
    //         $('body').addClass('openMenu');
    //     }
    //     if ($('.navbar-toggler').attr('aria-expanded') === 'false') {
    //         $('body').removeClass('openMenu');
    //     }
    // })(jQuery);


    // back to top
    var btn = $('#backToTop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    // end back to top

    AOS.init({
        once: true,
    });

    $('.happy__client').slick({
        dots: false,
        center: true,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: false,
        item: 1,
        adaptiveHeight: true,
        margin: 0,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    marginright: 16
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
    // $('.variable-width,.slider__mockup__design').slick({
    //     dots: false,
    //     center: true,
    //     arrows: false,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToScroll: 1,
    //     slidesToShow: 2.5,
    //     items: 3
    // });
    $('.answer__to__ks').click(function () {
        $('#exampleFormControlInput8').click();
    }); const accordianItemHeaders = document.querySelectorAll(
        ".accordian__item__header"
    );

    accordianItemHeaders.forEach(accordianItemHeader => {
        accordianItemHeader.addEventListener("click", () => {
            const current = document.querySelector(".accordian__item__header.active");

            if (current && current !== accordianItemHeader) {
                current.classList.toggle("active");
                current.nextElementSibling.style.maxHeight = 0;
            }
            accordianItemHeader.classList.toggle("active");

            const accordianItemBody = accordianItemHeader.nextElementSibling;

            if (accordianItemHeader.classList.contains("active")) {
                accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
            } else {
                accordianItemBody.style.maxHeight = 0;
            }
        });
    });
    $('.attech').click(function () {
        $("input[type='file']").trigger('click');
    })

    $("input[type='file']").change(function () {
        $('.attech__button').text(this.value.replace(/C:\\fakepath\\/i, ''))
    })
    // filter tab 
    var filterList = {
        init: function () {
            $('#gallery').mixItUp({
                selectors: {
                    target: '.gallery-item',
                    filter: '.filter'
                },
                animation: {
                    animateResizeContainer: false,
                    effects: 'fade scale'
                },
                load: {
                    filter: '.app, .web, .other, .design, .development' // sho++++w all items on page load.
                }
            });
        }
    };
    filterList.init();

    if ($('.slider__mockup__design').length) {
        var slider_offset_top = $('.slider__mockup__design').offset().top - $(window).height();

        $(window).scroll(function () {
            var scroll_pos = ($(document).scrollTop() - slider_offset_top) / 8;
            var sliderTranslateX = -scroll_pos;
            $('.slider__mockup__design').css({ "will-change": "transform", "transform": "translateX(" + sliderTranslateX + "px)" });
        });
    }
});

function myFunction(x) {
    x.classList.toggle("change");
}
const content = document.querySelectorAll('.design');
const tab = document.querySelectorAll('.link');
const slider = document.querySelector('.countries_slider');

function hideTabContent() {
    content.forEach(item => {
        item.style.display = 'none';
    });
    tab.forEach(item => {
        item.classList.remove('active');
    });
}

$(".read-more").click(function () {
    $(this).toggleClass("active");
    $(".slider__ks").toggleClass("active");

    if ($(".read-more").hasClass("active")) {
        $(".more__view").text("Show close");
    }
    else {
        $(".more__view").text("Show More");
    }
});

function showTabContent(i = 0) {
    content[i].style.display = 'grid';
    tab[i].classList.add('active');
}
hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
    const target = e.target
    if (target) {
        tab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});
textarea = document.querySelector("#floatingTextarea2");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

