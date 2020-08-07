let button = document.querySelector(".burdul__button");
let title = document.querySelector(".burdul__title");

button.addEventListener("click", function(){
    fetch("test", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json;charset=utf-8"
        },
        body : JSON.stringify({click : 1})
    }).then(response => response.text())
    .then(data => {
        if(Number(data)) {
            title.innerText = "Clicker Count" + data;
        }
    })
    .catch(err => console.error(err));
});

