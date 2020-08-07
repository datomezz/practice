<?php
    if(isset($_GET["myForm__input"])) {
        echo "GET " . $_GET["myForm__input"];
    }
    if(isset($_POST["myForm__input"])) {
        echo "POST " . $_POST["myForm__input"];
    }
?>