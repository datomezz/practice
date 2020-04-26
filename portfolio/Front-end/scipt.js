AOS.init();


var wave1 = $('#feel-the-wave').wavify({
    height: 30,
    bones: 5,
    amplitude: 60,
    color: '#29B2FF',
    speed: .16
});

var wave2 = $('#feel-the-wave-two').wavify({
    height: 30,
    bones: 5,
    amplitude: 40,
    color: 'rgb(65, 65, 65)',
    speed: .1
});

$('.wrapper').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical : true,
    verticalSwiping: true,
    responsive : [
        {
            breakpoint : 768,
            settings : {
                arrows : false,
                centerMode : true,
                slidesToShow : 2
            }
        },
        {
            breakpoint : 500,
            settings : {
                arrows : false,
                centerMode : true,
                slidesToShow : 1
            }

        }
    ]
});

$(".slick-next").text("").css({"display" : "none"});
$(".slick-prev").text("").css({"display" : "none"});


document.querySelectorAll(".section__arrow")[0].onclick = function(){
    document.querySelector(".slick-prev").click();
}
document.querySelectorAll(".section__arrow")[1].onclick = function(){
    document.querySelector(".slick-next").click();
}