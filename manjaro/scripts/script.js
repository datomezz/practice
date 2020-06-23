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
    modalAjax("category.html", "modal-lg");
});

logIn.forEach(item => {
    item.addEventListener("click", function(){ 
        modalAjax("login.html", "modal-md");
    });
});

allCategory.addEventListener("click", function() {
    modalAjax("allcategory.html", "modal-xl");
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