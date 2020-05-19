console.log("%cMEZZ.CODES %c\nFkn.. MEZZ.CODES .","font-size: 2rem; color: yellow; text-shadow: 1px 1px 1px black;","font-size: 12px;");

const switchers = document.querySelectorAll(".switcher");
const imgQuantity = document.querySelector(".img-quantity").innerText;
let imgSrc = document.querySelectorAll(".img-src");

let sliderContainer = document.querySelector(".article__slider");

for(let i = 0; i < Number(imgQuantity) - 1; i++){
    let imgLink = imgSrc[i].innerText;
    sliderContainer.innerHTML += `
        <img src="upload/${imgLink}" class="article__slider-img">
    `;
}


let slide = document.querySelectorAll(".article__slider-img");
console.log(slide);
let count = 0;

switchers[1].addEventListener("click", function(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    if(count + 1 >= slide.length){
        count = -1;
    }
    slide[++count].style.display = "flex";
    console.log(count);
});

switchers[0].addEventListener("click", function(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    if(count - 1 < 0){
        count = slide.length;
    }
    console.log(count);
    slide[--count].style.display = "flex";
});