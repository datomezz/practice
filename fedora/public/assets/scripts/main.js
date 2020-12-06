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
});

$(".unico-slider__products").slick({
  variableWidth : true,
  slidesToScroll: 2,
  arrows : false
});

$(".slider-modal").slick({
  slidesToShow : 1,
  slidesToScroll : 1,
  arrows : false,
  dots : false
});

// MODAL
$("body").on("shown.bs.modal", function() {
  $(".slider-modal").slick("setPosition");
});


// CALCULATORS
function calculate(e) {
  const quantity = Number(e.dataset.count);
  const resultDOM = document.querySelectorAll(".calculate__result");


  resultDOM.forEach(item => {
    const currentValue = Number(item.innerText);
    const newValue = currentValue + quantity;
    item.innerText = newValue < 1 ? 1 : newValue;
  });

}