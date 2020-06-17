try {
    $("[data-toggle='tooltip']").tooltip({
        template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' 
    });
} catch (err) {
    console.log("tooltips Doesn't Exist");
}

let allCategory = document.querySelector(".header__category");
let logIn = document.querySelectorAll(".user__login");

logIn.forEach(item => {
    item.addEventListener("click", function(){ 
        modalAjax("Login Form", "testLogin.html");
    });
});

allCategory.addEventListener("click", function() {
    modalAjax("Login Form", "testLogin.html");
});

function modalAjax(header, url) {
    let req = new XMLHttpRequest();
    let modalHeader = document.querySelector(".modal-header");
    let modalContent = document.querySelector(".modal-body");
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            modalHeader.innerText = header;
            modalContent.innerHTML = this.response;
        }
    }
    req.open("GET", url);
    req.send();
}