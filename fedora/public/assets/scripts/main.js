console.log("hellow");

function changeTopSlider(e) {
  const elementNumber = e.dataset.img;
  
  const allSliderForImgs = document.querySelectorAll(".slider-top__for img");
  const allSliderNavImgs = document.querySelectorAll(".slider-top__nav img");

  allSliderForImgs.forEach(item => {
    item.classList.remove("slider__active");
  });
  allSliderNavImgs.forEach(item => {
    item.classList.remove("slider__active");
  });

  allSliderNavImgs[elementNumber].classList.add("slider__active");  
  allSliderForImgs[elementNumber].classList.add("slider__active");  
}

$(".unico-slider__description").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : false,
  dots : true,
  dotsClass : "slider-description__dots"
})