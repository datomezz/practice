<?php 
  include "db.php";

  if(isset($_POST["submit"])){
    $file = $_FILES["file"];
    // echo "Yleo : " . file_get_contents($_FILES["file"]["tmp_name"]) . "<br>";

    echo "<br> <h1>yleo</h1>" . count($_FILES["file"]["tmp_name"]) . "<br>";
    echo "<br>" . $_FILES["file"]["tmp_name"][0] . "<br>";
    echo "<br>" . $_FILES["file"]["tmp_name"][1] . "<br>";
    echo "<br>" . $_FILES["file"]["tmp_name"][2] . "<br>";

    $fileName = $file["name"];
    $fileTmp = $file["tmp_name"];

    $target = "upload/" . basename($fileName);
    // echo "<br>" .$target."<br>";
    
    $sql = "INSERT INTO `img`(`surati`) VALUES ('$fileName')";
    mysql_query($connect, $sql);

    move_uploaded_file($_FILES["file"]["tmp_name"], $target);

    $sql = "SELECT * FROM img";
    $result = $connect->query($sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          echo "id: " . $row["id"]. " - Name: " . $row["surati"]."<br>";
          $link = "http://localhost/php/upload/". $row["surati"];
          echo "<img src='$link' alt='surati'>"; 
        }
      } else {
        echo "0 results";
      }
      mysqli_close($connect);
    header("Location: /php/index.php");
  }
?>