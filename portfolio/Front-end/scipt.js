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

$('.slider__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    vertical : true,
    verticalSwiping: true,
    prevArrow : "<button class='section__arrow btn btn-secondary mb-2'>▲</button>",
    nextArrow : '<button class="section__arrow btn btn-secondary mt-2">▼</button>',

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

const ctx_pie = document.querySelector("#chart_pie");
const ctx_bar = document.querySelector("#chart_bar");

if(ctx_pie && ctx_bar) {
    ctx_bar = ctx_bar.getContext("2d");
    ctx_pie = ctx_pie.getContext("2d");
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
        data: data_pie,
        options : {
            responsive : true,
            maintainAspectRatio : false
        }
    });
    
    
    var myBarrChart = new Chart(ctx_bar, {
        type: 'bar',
        data : data_bar,
        options : {
            responsive : true,
            maintainAspectRatio : false
        }
    });
}



const wrapper_article = document.querySelectorAll(".workplace__wrapper-item");
const arrows = document.querySelectorAll(".skill__arrow");

if(wrapper_article.length > 0){
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

barba.init({
    transitions: [{
      async : true,
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });