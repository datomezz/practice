let container = document.querySelectorAll(".response");
document.forms.myForm.onsubmit = function(e) {
    e.preventDefault();

    let formData = new FormData(document.forms.myForm);
    let userInput = document.querySelector("input").value;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `form.php?myForm__input=${userInput}`); //need php server

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            container[0].innerText = this.responseText;
        }
    }

    xhr.send();
}