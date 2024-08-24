<?php
$servername = "localhost";
$username = "xs645912_ho1";
$password = "honetto1";
$dbname = "xs645912_honetto1";

function DBconn(){
global $servername, $username, $password, $dbname;
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("データベース接続に失敗しました。もう一回お試しください。");
}
return $conn;
}
?>