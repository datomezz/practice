<?php
    require "db.php";

    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $surName = $_POST["surname"];
        $description = $_POST["description"];

        $pictures = $_FILES["image"];
        $picName = $pictures["name"];
        $picTmp = $_FILES["image"]["tmp_name"];
        $picString = " ";

        for($i = 0; $i < count($picName); $i++){
            $picString .= $picName[$i] . "/";
        }
        echo "<br>" . $picString . "<br>";

        //SQL
        $query = "INSERT INTO `article`(`name`, `surname`,
        `description`, `pictures`) VALUES ('$name', '$surName', '$description', '$picString')";

        mysqli_query($connect, $query);

        for($y = 0; $y < count($picTmp); $y++){
            $target = "upload/" . basename($picName[$y]);
            move_uploaded_file($picTmp[$y], $target);
        }

        $query = "SELECT * FROM article WHERE id='3'";

        $result = mysqli_query($connect, $query);

        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                echo $row["pictures"] . "<br>";
            }
        } else {
            echo "Result 0";
        }

        echo "<br> yleo " . mysqli_fetch_assoc(mysqli_query($connect, $query))["name"] . "<br>";
        $string = explode("/", $picString);

    }
?>