function ajax(method, url) {
    let req = new XMLHttpRequest();

    req.onreadystatechange =function() {
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.response);
            let out = "";

            response.forEach(item => {
                let arr = [];
                for(let i = 0; i < 3; i++){
                    let rand = Math.floor(Math.random() * 255);
                    arr.push(rand);
                }
                let bgColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
                out += `
                <div class="user" style='background : ${bgColor}'>
                    <p class="text">${item.name}</p>
                    <p class="text">${item.username}</p>
                    <p class="text">${item.email}</p>
                    <p class="text">${item.phone}</p>
                    <h5>${item.website}</h5>
                </div>
                `;
            });
            document.querySelector(".container").innerHTML = out;
        }
    }

    req.open(method, url);
    req.send();
}

// document.documentElement.addEventListener("click", function(){ 
//     ajax("GET", "https://jsonplaceholder.typicode.com/users");
// });

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response;
    })
    .then((data) => {
        console.log(data);
    });