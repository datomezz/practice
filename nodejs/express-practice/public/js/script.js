console.log("Hellow");

const submitCart = document.querySelectorAll(".cart__submit");

submitCart.forEach(item => {
    item.onclick = function(e) {
        e.preventDefault();
        console.log(item.dataset.id);
        let obj = {
            id : item.dataset.id
        }

        fetch("http://localhost:3000/cart/add", {
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json;charset=utf-8"
            },
            body : JSON.stringify(obj)
        });
    }
});

var instance = M.Tabs.init(document.querySelectorAll(".tabs"));

