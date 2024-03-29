<?php

$hostname = "localhost"; 
$username = "root";
$password = "";
$db_name = "phpchatapp_db";

$conn = mysqli_connect($hostname, $username, $password, $db_name);

if (!$conn) {
    echo 'Database connection error' . mysqli_connect_error();
}

?>
