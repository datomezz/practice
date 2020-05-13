<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Form</title>
    <style>
        .pizdec {
            width : 20rem;
            height : 15rem;
            background : red;
            animation-name : fade;
            animation-duration : 2s;
        }
        @keyframes fade {
            from { opacity : 0}
            to {opacity : 1}
        }
    </style>
</head>

<body>
<?php 

    $connect = mysqli_connect('127.0.0.1', 'root', '');

    if ($connect->connect_error) {
        die("Connection failed: " . $connect->connect_error);
    }
    echo "Connected successfully";

?>
    <form>
        <a href="javascript:void(0)" type="submit">submit</a>
        <h1>text</h1>
    </form>


<script>
    const text = document.querySelector("h1");
    const button = document.querySelector("a");

    button.addEventListener("click", function(){
        let req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                text.innerHTML = this.response;
                console.log(this.response);
            }
        }
        req.open("GET", "ajax.php", true);
        req.send();
    });



    console.log("%cMEZZ.CODES %c\nFkn.. MEZZ.CODES .","font-size: 2rem; color: yellow; text-shadow: 1px 1px 1px black;","font-size: 12px;");
</script>
</body>

</html>