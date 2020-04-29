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

$(".slick-next").css({"display" : "none", "z-index" : "-1000"});
$(".slick-prev").css({"display" : "none", "z-index" : "-1000"});

const slider_arrow = document.querySelectorAll(".section__arrow");

if(slider_arrow[0]){
    slider_arrow[0].onclick = function(){
        document.querySelector(".slick-prev").click();
    }
    slider_arrow[1].onclick = function(){
        document.querySelector(".slick-next").click();
    }
}


const menuDiv = $(".header__navigation");
const menuText = $("header div a");
const hover_audio = new Audio("../Front-end/assets/hover.mp3");

for(let i = 0; i < menuDiv.length; i++){
    menuDiv[i].addEventListener("mouseenter", function(){
        menuText[i].classList.remove("animated", "bounceInRight" || "animated", "bounceInDown");
        menuText[i].style.animationDelay = "0s";
        menuText[i].style.animationDuration = ".9s";
        menuText[i].classList.add("animated", "flipInX");
        hover_audio.play();
        setTimeout(function(){
            menuText[i].classList.remove("animated", "flipInX");
        }, 1000);
    });
}

const skills_wrapper = document.querySelector(".workplace__wrapper");

if(skills_wrapper){

}