let container = document.querySelectorAll(".response");
document.forms.myForm.onsubmit = function(e) {
    e.preventDefault();

    let inputValue = document.querySelector("input").value;

    let get = fetch(`form.php?myForm__input=${inputValue}`)
        .then(response => response.text())
        .then(data => {
            container[0].innerText = data;
        }).catch(err => console.log(err));

    let post = fetch(`form.php`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json;charset=utf-8"
        },
        body : `myForm__input=${inputValue}`
    })
    .then(response => response.text())
    .then(data => {
        container[1].innerText = data;
    }).catch(err => console.error(err));
}