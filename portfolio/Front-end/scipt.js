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
const ctx_bar = document.querySelector("#chart_bar").getContext("2d");

const ctx_pie_color = ["#777BB3", "#F7E018", "#563D7C", "#464342", "#9B5C8F"];

let data_pie = {
    datasets: [{
        data: [56, 85, 90, 75, 40],
        backgroundColor: ctx_pie_color,
        hoverBorderWidth : 8,
        hoverBorderColor : "#fff"
    }],

    labels: [
        'PHP',
        'Javascript',
        'Bootstrap',
        'Wordpress',
        "WooCommerce"
    ],
};

let data_bar = {
    datasets : [{
        backgroundColor : ctx_pie_color,
        data: [56, 85, 90, 75, 40, 0, 100],
        label : "knowledge"
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


var myBarrChart = new Chart(ctx_bar, {
    type: 'bar',
    data : data_bar
});


const wrapper_article = document.querySelectorAll(".workplace__wrapper-item");
const arrows = document.querySelectorAll(".skill__arrow");

if(wrapper_article){
    let count = 0;
    
    arrows[1].addEventListener("click", function(){
        if(count >= wrapper_article.length - 1){
            count = -1;
        }
        swapArrow(1);
    });
    arrows[0].addEventListener("click", function(){
        if(count <= 0){
            count = wrapper_article.length;
        }
        swapArrow(-1);
    });
    
    function swapArrow(sum){
        for(let i = 0; i < wrapper_article.length; i++){
            wrapper_article[i].classList.remove("enabled");
        }
        wrapper_article[count += sum].classList.add("enabled");
        if(count == 1){
            quoteWritter();
        } else {
            quoteCount = 0;
            quoteNode.innerHTML = "";
        }
    }
}

const progress_bars = document.querySelectorAll(".progress-bar");
const progress_bars_percentArr = ["56","85","90","75","40"];

if (progress_bars){
    for(let i = 0; i < progress_bars.length; i++){
        let rand = Math.floor(Math.random() * 7) + 3;
        progress_bars[i].style.width = progress_bars_percentArr[i] + "%";
        progress_bars[i].style.transition = `${rand}s`;
    }
}

const quoteNode = document.querySelector(".quote");
let quote = "“Talk is cheap. Show me the code.”";

let quoteCount = 0;

function quoteWritter(){
    if(quoteCount < quote.length){
        quoteNode.innerHTML += quote.charAt(quoteCount);
        quoteCount++;
        setTimeout(quoteWritter, 80);
    }
}