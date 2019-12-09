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
    scrollToYear();
});

$('.swiper-button-prev').on('click', event =>{
    scrollToYear();
});

function scrollToYear(){
    let currentSelectedYear = $('.swiper-pagination-bullet-active')[0];
    let swapperPaginator = $('.swiper-pagination')[0];

    let parentDiv = $(swapperPaginator);
    let innerListItem = $(currentSelectedYear);

    parentDiv.animate({
        scrollTop: parentDiv.scrollTop() + (innerListItem.position().top - parentDiv.position().top) - (parentDiv.height()/4) + (innerListItem.height()/4)},
        500
    );
}