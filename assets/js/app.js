$(document).ready(function() {
    //tabs
    $('.tabs li').on('click', function() {
        let childClass = $(this).attr('tab');
        let selectedChild = $(`#${childClass}`);

        $(this).addClass('active').siblings().removeClass('active');
        selectedChild.addClass('show').siblings().removeClass('show');


    });

    //CAROUSEL SLIDER
    const $carousel = $(".carousel");
    const $slides = $(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = $slides.length - 1;
        } else if (index >= $slides.length) {
            currentIndex = 0;
        }

        $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    }

    const autoAdvanceInterval = 4000; 

    setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, autoAdvanceInterval);
})
