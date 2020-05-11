<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Form</title>
</head>

<body>
    <form>
        <input type="text" name="name">
        <input type="text" name="lastName">
        <input type="text" name="number">
        <input type="text" name="boolean">
        <button type="submit" onclick="showText(this.value)">submit</button>
        <h1>text</h1>
    </form>


<script>
    function showText(val){
        let req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.response);
            }
        }
        req.open("GET", "ajax.php?q=", true);
        req.send();

    }



    console.log("%cMEZZ.CODES %c\nFkn.. MEZZ.CODES .","font-size: 2rem; color: yellow; text-shadow: 1px 1px 1px black;","font-size: 12px;");
</script>
</body>

</html>