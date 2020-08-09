try {
    $("[data-toggle='tooltip']").tooltip({
        template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' 
    });
} catch (err) {
    console.log("tooltips Doesn't Exist");
}

let allCategory = document.querySelector(".header__category");
let logIn = document.querySelectorAll(".user__login");
let category = document.querySelector(".input__category");

category.addEventListener("click", function() {
    modalAjax("_category.html", "modal-lg");
});

logIn.forEach(item => {
    item.addEventListener("click", function(){ 
        modalAjax("_login.html", "modal-md");
    });
});

allCategory.addEventListener("click", function() {
    modalAjax("_allcategory.html", "modal-xl");
});

function modalAjax(url, modalType) {
    let req = new XMLHttpRequest();
    let modalContent = document.querySelector(".modal-body");
    let modalContainer = document.querySelector(".unico__modalContainer");

    req.onreadystatechange = function() {
        modalContainer.className = "unico__modalContainer modal-dialog h-100";
        if(this.readyState == 4 && this.status == 200){
            if(modalType) modalContainer.classList.add(modalType);
            modalContent.innerHTML = this.response;
        }
    }
    req.open("GET", url);
    req.send();
}

$('.slider-thumbnail').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    autoplaySpeed : 5000,
    dotsClass : "slider-thumbnail__dots",
    prevArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-left arrow'></i></a>",
    nextArrow : "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-right arrow'></a>"
});


$('.slider-category').slick({
    infinite : true,
    slidesToShow : 6,
    slidesToScroll : 4,
    prevArrow : "",
    nextArrow : "",
    autoplaySpeed : 7000,
    dots : true,
    dotsClass : "slider-category__dots",
    responsive : [
        {
            breakpoint : 1200,
            settings : {
                slidesToShow : 4,
                slidesToScroll : 4
            }
        },

        {
            breakpoint : 768,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 3
            }
        },
        {
            breakpoint : 574,
            settings : {
                variableWidth: true,
                slidesToShow : 2,
                slidesToScroll : 2,
            }
        }
    ]
});

$('.slider-product').slick({
    infinite : true,
    slidesToShow : 6,
    slidesToScroll : 6,
    prevArrow : "",
    nextArrow : "",
    autoplaySpeed : 7000,
    dots : true,
    dotsClass : "slider-category__dots",
    responsive : [
        {
            breakpoint : 1200,
            settings : {
                slidesToShow : 5,
                slidesToScroll : 4
            }
        },
        {
            breakpoint : 992,
            settings : {
                slidesToShow : 4,
                slidesToScroll : 4
            }
        },
        {
            breakpoint : 768,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 3
            }
        },
        {
            breakpoint : 574,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 2
            }
        }
    ]
});

$('.slider-brand').slick({
    infinite : true,
    slidesToShow : 6,
    slidesToScroll : 6,
    prevArrow : "",
    nextArrow : "",
    autoplaySpeed : 7000,
    responsive : [
        {
            breakpoint : 1200,
            settings : {
                slidesToShow : 5,
                slidesToScroll : 4
            }
        },
        {
            breakpoint : 992,
            settings : {
                slidesToShow : 4,
                slidesToScroll : 4
            }
        },
        {
            breakpoint : 768,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 3
            }
        },
        {
            breakpoint : 574,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 2
            }
        }
    ]
});

function threeDot(str){
    let strText = str;
    strText = strText.innerHTML;

    let currentWidth = str.clientWidth;
    let sum = currentWidth / 4;

    if(sum < strText.length){
        strText = strText.split("").reverse().join("");
        strText = strText.slice(strText.length - sum);
        strText = strText.split("").reverse().join("");
        str.innerHTML = strText + "...";
    } 
}

let sliderLinks = document.querySelectorAll(".slider-product__header");

for(let i = 0; i < sliderLinks.length; i++){
    threeDot(sliderLinks[i]);
}

const countDownElements = document.querySelectorAll(".countdown__element");

const endTime = new Date("2020-07-31T12:25").getTime();

if(countDownElements.length > 0) {
    setInterval(function(){
        let now = new Date().getTime();
        let newDate = endTime - now;
    
        let days = Math.floor(newDate / (1000 * 60 * 60 * 25));
        let hours = Math.floor((newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((newDate % (1000 * 60)) / 1000);
    
        let dateArr = [days, hours, minutes, seconds];
    
        for(let i = 0; i < dateArr.length; i++){
            countDownElements[i].innerText = dateArr[i];
        }
    
    }, 1000);
}

//CATEGORY

let ckeckboxes = document.querySelectorAll(".submit__checkbox");
let submits = document.querySelectorAll(".submit");

if(submits.length > 0) {
    for(let i = 0; i < submits.length; i++) {
        submits[i].onclick = function() {
            submits[i].classList.toggle("submit__active");
            ckeckboxes[i].classList.toggle("checkbox__active");

        }
    }
}

let filterHeaders = document.querySelectorAll(".filter__header");
let filterHeadersIcons = document.querySelectorAll(".filter__header i");

if(filterHeaders.length > 0) {
    for(let i = 0; i < filterHeaders.length; i++) {
        filterHeaders[i].onclick = function() {
            filterHeadersIcons[i].classList.toggle("icon__rotate");
        }
    }
}

let colors = document.querySelectorAll(".color");

if(colors.length > 0) {
    colors.forEach(element => {
        element.onclick = function() {
            element.classList.toggle("color__active");
        }
    });
}

$('.slider-history').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass : "slider-history__dots",
    prevArrow : "",
    nextArrow : ""
});