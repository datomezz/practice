const $ = jQuery.noConflict();

try {
  $("[data-toggle='tooltip']").tooltip({
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
} catch (err) {
  console.log("tooltips Doesn't Exist");
}

let allCategory = document.querySelector(".header__category");
let logIn = document.querySelectorAll(".user__login");
let category = document.querySelector(".input__category");

category.addEventListener("click", function () {
  modalAjax("_category.html", "modal-lg");
});

logIn.forEach(item => {
  item.addEventListener("click", function () {
    modalAjax("_login.html", "modal-md");
  });
});

allCategory.addEventListener("click", function () {
  modalAjax("_allcategory.html", "modal-xl");
});

function modalAjax(url, modalType) {
  let req = new XMLHttpRequest();
  let modalContent = document.querySelector(".modal-body");
  let modalContainer = document.querySelector(".unico__modalContainer");

  req.onreadystatechange = function () {
    modalContainer.className = "unico__modalContainer modal-dialog h-100";
    if (this.readyState == 4 && this.status == 200) {
      if (modalType) modalContainer.classList.add(modalType);
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
  dots: true,
  autoplaySpeed: 5000,
  dotsClass: "slider-thumbnail__dots",
  prevArrow: "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-left arrow'></i></a>",
  nextArrow: "<a class='slider__arrow' href='javascript:void(0)'><i class='fas fa-arrow-right arrow'></a>"
});


$('.slider-category').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 4,
  prevArrow: "",
  nextArrow: "",
  autoplaySpeed: 7000,
  dots: true,
  dotsClass: "slider-category__dots",
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 574,
      settings: {
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});

$('.slider-product').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: "",
  nextArrow: "",
  autoplaySpeed: 7000,
  dots: true,
  dotsClass: "slider-category__dots",
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 574,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.slider-brand').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: "",
  nextArrow: "",
  autoplaySpeed: 7000,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 574,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

//DETAILS PRODUCT SLIDER
$(".slider-product-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "",
  nextArrow: "",
  asNavFor: '.slider-product-nav',
  responsive: [{
    breakpoint: 376,
    settings: {
      dots : true
    }
  }]
});
$(".slider-product-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-product-for',
  arrows: true,
  prevArrow: "<button class='slider-arrow'><i class='uil uil-arrow-left'></i></button>",
  nextArrow: "<button class='slider-arrow'><i class='uil uil-arrow-right'></i></button>",
  dots: false,
  focusOnSelect: true,
  draggable: false,
  variableWidth: true
});


//THREE DOTS
function threeDot(str) {
  let strText = str;
  strText = strText.innerHTML;

  let currentWidth = str.clientWidth;
  let sum = currentWidth / 4;

  if (sum < strText.length) {
    strText = strText.split("").reverse().join("");
    strText = strText.slice(strText.length - sum);
    strText = strText.split("").reverse().join("");
    str.innerHTML = strText + "...";
  }
}

let sliderLinks = document.querySelectorAll(".slider-product__header");

for (let i = 0; i < sliderLinks.length; i++) {
  threeDot(sliderLinks[i]);
}

const countDownElements = document.querySelectorAll(".countdown__element");

const endTime = new Date("2020-07-31T12:25").getTime();

if (countDownElements.length > 0) {
  setInterval(function () {
    let now = new Date().getTime();
    let newDate = endTime - now;

    let days = Math.floor(newDate / (1000 * 60 * 60 * 25));
    let hours = Math.floor((newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((newDate % (1000 * 60)) / 1000);

    let dateArr = [days, hours, minutes, seconds];

    for (let i = 0; i < dateArr.length; i++) {
      countDownElements[i].innerText = dateArr[i];
    }

  }, 1000);
}

//CATEGORY

let ckeckboxes = document.querySelectorAll(".submit__checkbox");
let submits = document.querySelectorAll(".submit");

if (submits.length > 0) {
  for (let i = 0; i < submits.length; i++) {
    submits[i].onclick = function () {
      submits[i].classList.toggle("submit__active");
      ckeckboxes[i].classList.toggle("checkbox__active");

    }
  }
}

let filterHeaders = document.querySelectorAll(".filter__header");
let filterHeadersIcons = document.querySelectorAll(".filter__header i");

if (filterHeaders.length > 0) {
  for (let i = 0; i < filterHeaders.length; i++) {
    filterHeaders[i].onclick = function () {
      filterHeadersIcons[i].classList.toggle("icon__rotate");
    }
  }
}

let colors = document.querySelectorAll(".color");

if (colors.length > 0) {
  colors.forEach(element => {
    element.onclick = function () {
      element.classList.toggle("color__active");
    }
  });
}

let filterSwitcher = document.querySelector(".filter-main__header");
let filterMain = document.querySelector(".filter-main");

if (filterSwitcher) {

  filterSwitcher.onclick = function () {
    if (filterSwitcher.getAttribute("aria-expanded") === "true") {
      filterMain.className = "filter filter-main main__action";
    } else {
      filterMain.className = "filter filter-main";
    }
  }

}

$('.slider-history').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slider-history__dots",
  prevArrow: "",
  nextArrow: ""
});

class Dropdown {
  constructor(el) {
    this.$el = document.querySelector(`.${el}`);
  }

  init(ajax) {
    this.$el.onclick = function () {
      let title = this.children[0];
      let dropdown = this.children[1];

      dropdown.classList.toggle("d-none");
      title.classList.toggle("icon__rotate");
      console.log(this);

      for (let i = 0; i < dropdown.children.length; i++) {
        dropdown.children[i].onclick = function () {
          let currentTitleText = title.innerText;
          let currentTitleId = title.dataset.id;

          title.innerText = this.innerText;
          title.dataset.id = this.dataset.id;
          this.innerText = currentTitleText;
          this.dataset.id = currentTitleId;

          if (ajax) {
            const ajax = new Fetch().getProfileModal(Number(title.dataset.id), "profile-modal__container");
          }
        }
      }
    }
  }
}

class ClassAdder {
  constructor(el, cls) {
    this.$el = el;
    this.class = cls;
  }

  toggleClass(ajax) {
    let elements = document.querySelectorAll("." + this.$el);
    let elClass = this.class;

    elements.forEach(item => {
      item.onclick = function () {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("profile__active");
        }

        item.classList.toggle(elClass);

        if (ajax) {
          const ajax = new Fetch().getProfileModal(Number(item.dataset.id), "profile-modal__container");
        }
      }
    });
  }
}


class Fetch {
  constructor() {

  }

  init() {
    document.addEventListener("DOMContentLoaded", async function () {
      const fetch = await new Fetch().getProfileModal(0, "profile-modal__container");

      const $profileInputSelect = document.querySelector(".profile-input__select");
      if ($profileInputSelect) {
        const profileInput = await new Dropdown("profile-input__select").init();
      }
    });
  }

  async getProfileModal(dataset, modalContainer) {
    let att = modalContainer;
    let container = document.querySelector("." + att);

    switch (dataset) {
      case 0:
        await fetch("../views/profile/_personal.html")
          .then(response => response.text())
          .then(async html => {
            container.innerHTML = html;
            const profileInput = await new Dropdown("profile-input__select").init();
          })
          .catch(err => console.error(err));
        break;
      case 1:
        await fetch("../views/profile/_address.html")
          .then(response => response.text())
          .then(html => {
            container.innerHTML = html;
          })
          .catch(err => console.error(err));
        break;
      case 2:
        await fetch("../views/profile/_referral.html")
          .then(response => response.text())
          .then(html => {
            container.innerHTML = html;
          })
          .catch(err => console.error(err));
        break;
      case 3:
        await fetch("../views/profile/_history.html")
          .then(response => response.text())
          .then(html => {
            container.innerHTML = html;
          })
          .catch(err => console.error(err));
        break;
    }
  }

}

const profile = document.querySelector(".profile-panel__container");

if (profile) {
  const profileDropdown = new Dropdown("profile__selected").init(true);
  const profilePage = new Fetch().init();
  const profileToggle = new ClassAdder("profile-panel__link", "profile__active").toggleClass(true);
}

const filter = document.querySelector(".filter-dropdown__container");

if (filter) {
  const filterDropdown = new Dropdown("filter-dropdown__container").init();
}


function copyFunc(selector) {
  let $el = document.querySelector("." + selector);
  $el.select();
  $el.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

function modalFetch(el, type) {
  console.log(el.dataset.id);
  fetch(`../views/modal/${type}.html`)
    .then(response => response.text())
    .then(data => {
      const modalContent = document.querySelector(".modal-body");
      const modalContainer = document.querySelector(".unico__modalContainer");

      modalContainer.classList.add("modal-xl");
      modalContent.innerHTML = data;
    })
    .catch(err => {
      if (err) throw err;
    });
}

//Detail Order-Calculator

const orderCalculator = document.querySelector(".order__calculator");

if (orderCalculator) {
  let operators = document.querySelectorAll(".calculate");
  let current = document.querySelector(".calculate__result");
  let count = Number(current.innerText);


  operators.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (index != 0) {
        count++;
      } else {
        count > 0 ? --count : 0;
      }
      current.innerText = count;
    });
  })
}

//Details Fixed Article

const detailsFixed = document.querySelector(".datails__fixed");

if(detailsFixed) {
  window.addEventListener("scroll", () => {
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? detailsFixed.style.height = "110px" : detailsFixed.style.height = "0px";
  });
}

//CART BANK ACTIVE

const bankItems = document.querySelectorAll(".cart-bank__item");

if(bankItems.length > 0) {
  bankItems.forEach((item, index, arr) => {
    item.onclick = () => {

      for(let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("bank-item__active");
      }

      item.classList.toggle("bank-item__active");
    }
  });
}


//FAVORITES TITLE HEIGHT
const favoritesItemTitle = document.querySelectorAll(".favorites__title");

favoritesItemTitle
  ? favoritesItemTitle.forEach(item => {
    let strText = item;
    strText = strText.innerText;

    let numOfChars = strText.length;

    const textArr = strText.split("");
    textArr.splice(50, numOfChars);
    const arrToString = textArr.join("");

    item.innerText = arrToString + "...";
  })
  : null;

// MOBILE CATEGORY LIST TRIGGER

const mobileCategory = document.querySelector("#mobile-category");
const mobileClose = document.querySelector(".category-list__button");

if(mobileCategory) {
  const itemsContainer = document.querySelector(".category-list__mobile");
  const wholeContainer = document.querySelector(".category-list__mobile--container");

  const closeMobileModal = () => {
    itemsContainer.style.transform = "translate(-300px)";
    setTimeout(() => {wholeContainer.style.display = "none";}, 300);
  }

  const openMobileModal = () => {
    wholeContainer.style.display = "block";
    setTimeout(() => {itemsContainer.style.transform = "translate(0)"}, 200);
  }

  mobileClose.onclick = () => closeMobileModal();

  mobileCategory.onclick = () => openMobileModal();
}

//HEADER USER DROPDOWN

const userLogin = document.querySelector(".user__login");
const userDropdown = document.querySelector(".header__user--list");


if(userDropdown) {
  const arrow = document.querySelector(".uil-angle-down");

  userLogin.onclick = () => {
    arrow.classList.toggle("arrow__toggle");
    userDropdown.classList.toggle("d-flex");
  }
}