$('.slider__sale').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    dotsClass : "slider__sale-dots",
    prevArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-left arrow'></i></a>",
    nextArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-right arrow'></a>"
});

let sliderSaleDots = document.querySelectorAll(".slider__sale-dots button");

if(sliderSaleDots.length > 0){
    for(let i = 0; i < sliderSaleDots.length; i++){
        sliderSaleDots[i].innerText = "";
    }
}

$('.slider__category').slick({
    infinite : true,
    slidesToShow : 5,
    slidesToScroll : 4,
    prevArrow : "",
    nextArrow : "",
    dots : true,
    dotsClass : "slider__category-dots"
});

let sliderCategoryDots = document.querySelectorAll(".slider__category-dots button");

if(sliderCategoryDots.length > 0){
    for(let i = 0; i < sliderCategoryDots.length; i++){
        sliderCategoryDots[i].innerText = "";
    }
}