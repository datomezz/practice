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

const ctx_pie = document.querySelector("#chart_pie").getContext("2d");
const ctx_radar = document.querySelector("#chart_radar").getContext("2d");

const ctx_pie_color = ["#777BB3", "#F7E018", "#563D7C", "#464342", "#9B5C8F"];

let data_pie = {
    datasets: [{
        data: [56, 85, 90, 75, 40],
        backgroundColor: ctx_pie_color,
        hoverBorderWidth : 8,
        hoverBorderColor : "#fff"
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'PHP',
        'Javascript',
        'Bootstrap',
        'Wordpress',
        "WooCommerce"
    ],
};

let data_radar = {
    datasets : [{
        backgroundColor : "transparent",
        data: [56, 85, 90, 75, 40],
        pointHoverBorderColor : ctx_pie_color
    }],
    labels: [
        'PHP',
        'Javascript',
        'Bootstrap',
        'Wordpress',
        "WooCommerce"
    ]
}

var myDoughnutChart = new Chart(ctx_pie, {
    type: 'doughnut',
    data: data_pie
});


var myRadarChart = new Chart(ctx_radar, {
    type: 'radar',
    data: data_radar
});

const skills_wrapper = document.querySelector(".workplace__wrapper");

const wrapper = document.querySelectorAll(".workplace__wrapper article");

console.log(wrapper);
if(wrapper){
    let count = 0;

    document.addEventListener("click", function(){
        count++;
        for(let x in wrapper){
            wrapper[x].style.display = "none";
        }
        wrapper[count].style.display = "block";
    });
}