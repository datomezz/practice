let container = document.querySelectorAll(".response");
document.forms.myForm.onsubmit = function(e) {
    e.preventDefault();

    let formData = new FormData(document.forms.myForm);
    let userInput = document.querySelector("input").value;
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "form.php"); //need php server
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            container[0].innerText = this.responseText;
        }
    }

    xhr.send(`myForm__input=${userInput}`);
}