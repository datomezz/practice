<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LocalStorage</title>
    <style>
        .container {
            display : flex;
            width : 200px;
            margin : 0 auto;
            justify-content: space-between;
        }
        .box {
            width : 30px;
            height : 30px;
            background : rgba(190, 190, 190);
            opacity: .9;
            border : 1px solid black;
            display : flex;
            justify-content: center;
            align-items: center;
            
        }
        .box:hover {
            background : rgb(190, 190, 190);
            opacity: .7;
            cursor : pointer;
            color : #fff;
        }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <script src="../libraries/jquery-3.4.1.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="box" name="id">>1</div>
        <div class="box"><i class="fas fa-star"></i>2</div>
        <div class="box"><i class="fas fa-star"></i>3</div>
        <div class="box"><i class="fas fa-star"></i>4</div>
        <div class="box"><i class="fas fa-star"></i>5</div>
    </div>
    <div class="rating" data-rate-value=6></div>

    <script src="rater.min.js"></script>
    <script>
        const box = document.querySelectorAll(".box");
        let localArr = [];
        let number  = 20;

        box[0].innerText = localStorage.getItem('stars');
        box[0].style.opacity = localStorage.getItem("opacity");
        for(let i = 0; i < box.length; i++){
            box[i].addEventListener("click", function(e){
                e.preventDefault();
                localStorage.setItem("stars",`${box[i].innerText}`);
                localStorage.setItem("pointerEvent", "false");
                localStorage.setItem("opacity", ".4");

                box[i].style.opacity = ".4";

                for(let x = 0; x < box.length; x++){
                    box[x].style.pointerEvents = "none";
                }
                console.log(localStorage);
            });
        }

        if(localStorage.getItem("pointerEvent") === "false"){
            for(let x = 0; x < box.length; x++){
                box[x].style.pointerEvents = "none";
            }
        }

        
    </script>
</body>
</html>