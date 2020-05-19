<?php

    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "php";

    // $connect = new mysqli($servername, $username, $password, $dbname);

    // if($connect->connect_error){
    //     die("Error: " . $connect->$connect_error);
    // }

    $connect = mysqli_connect("localhost", "root", "", "php");

    if($connect){
        echo "Query has been required";
    } else {
        echo "Error : " . mysqli_connect_error();
    }


?>