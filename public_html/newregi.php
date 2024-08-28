<?php

include("inc/connection.php");

$conn = DBconn();

// フォームに入れられたアカウント名とパスワードを変数に入れる
$acountname = $_POST["acountname"];
$acountpass = password_hash($_POST["acountpass"], PASSWORD_DEFAULT); // パスワードハッシュ化

$sql = "INSERT INTO users3 (acountname, acountpass) VALUES ('$acountname', '$acountpass')";

$sql1 = "SELECT * FROM users3 WHERE acountname='$acountname'";
$result1 = $conn->query($sql1);

// クエリ実行とともに新規登録を承認
if($result1->num_rows == 0){
    if($conn->query($sql) === TRUE){
    echo "新規登録完了";
}else{
    echo "エラー";
}
}else{
    echo "既に登録されています。";
}

$conn->close();
?>