var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        768: {
            direction: 'horizontal',
        }
    }
});

$('.swiper-button-next').on('click', event =>{
    let currentSelectedYear = $('.swiper-pagination-bullet-active')[0];
    let swapperPaginator = $('.swiper-pagination')[0];

    // swapperPaginator.animate({ scrollTop: -100}, 600);
    console.log( ($(currentSelectedYear).offset().top) );
    console.log($(currentSelectedYear)[0].offsetTop + $(swapperPaginator)[0].scrollTop);


    let parentDiv = $(swapperPaginator);
    let innerListItem = $(currentSelectedYear);

    parentDiv.animate({
        scrollTop: parentDiv.scrollTop() + (innerListItem.position().top - parentDiv.position().top) - (parentDiv.height()/2) + (innerListItem.height()/2)},
        800
    );
});