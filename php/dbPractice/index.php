<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="categories">
            <div class="category__list">
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/index.php" class="list__item">მთავარი</a>
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/admin.php" class="list__item">მონაცემთა დამატება</a>
                <a href="http://<?php echo $_SERVER['HTTP_HOST'];?>/php/posts.php" class="list__item">მონაცემთა სია</a>
            </div>
        </div>
        <div class="section__index">
            <?php 
                if(isset($_GET["id"])){
                    $id = $_GET["id"];
                    echo "<h1 class='add__header'>there is ID = " . $id . "</h1>";
                    require "db.php";

                    $query = "SELECT * FROM article WHERE id='$id'";

                    $result = mysqli_query($connect, $query);

                    $name = mysqli_fetch_assoc(mysqli_query($connect, $query))["name"];
                    $surname = mysqli_fetch_assoc(mysqli_query($connect, $query))["surname"];
                    $description = mysqli_fetch_assoc(mysqli_query($connect, $query))["description"];
                    $picturesArr = mysqli_fetch_assoc(mysqli_query($connect, $query))["pictures"];

                    $picture = explode("/", $picturesArr);

                    echo $picture[0];
                    echo "<span class='img-quantity'>" . count($picture) . "</span>";
                    for($i = 0; $i < count($picture); $i++){
                        echo "<span class='img-src'>" . $picture[$i] . "</span>";
                    }


                } else {
                    echo "<h1 class='add__header'>there is no ID </h1>";
                }
            ?>
            <div class="article">
                <div class="article__slider">
                
                    <div class="article__slider-switchers">
                        <a href="#" class="switcher switcher__left">◄</a>
                        <a href="#" class="switcher switcher__right">►</a>
                    </div>
                </div>
                <div class="article__user">
                    <p class="article__user-id"><?php echo $name; ?></p>
                    <p class="article__user-id"><?php echo $surname; ?></p>
                </div>
                <p class="article__content"><?php echo $description; ?></p>
                <h1 class="article__id"><?php echo $id; ?></h1>
            </div>
        </div>
    </div>
    <script src="scripts/script.js"></script>
</body>
</html>