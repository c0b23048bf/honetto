<?php

include("inc/connection.php");

$conn = DBconn();

// フォームに入れられたアカウント名とパスワードを変数に入れる
$acountname = $_POST["acountname"];
$acountpass = password_hash($_POST["acountpass"], PASSWORD_DEFAULT); // パスワードハッシュ化

$sql = "INSERT INTO users2 (acountname, acountpass) VALUES ('$acountname', '$acountpass')";

// クエリ実行とともに新規登録を承認
if($conn->query($sql) === TRUE){
    echo "新規登録完了";
}else{
    echo "エラー";
}

$conn->close();
?>