let slides = document.querySelectorAll(".slide");

for(let i = 0; i < slides.length; i++){
    let randArr = [];
    for(let y = 0; y < 3; y++){
        let rand = Math.floor(Math.random() * 255);
        randArr.push(rand);
    }
    slides[i].style.background = `rgb(${randArr[0]}, ${randArr[1]}, ${randArr[2]})`;
}

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow : "<div>yleo</div>",
        nextArrow : "<div>mutelo</div>"
    });
});