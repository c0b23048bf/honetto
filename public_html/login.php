<?php
session_start();
include("inc/connection.php");

$conn = DBconn();

// フォームに入れられたアカウント名とパスワードを変数に入れる
$acountname = $_POST["acountname"];
$acountpass = $_POST["acountpass"];

// query()の中のsql操作を実行。具体的にはアカウント名に合う行を探してる
$stmt = $conn->prepare("SELECT * FROM users2 WHERE acountname = ?");
$stmt->bind_param("s", $acountname);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows > 0) { // アカウント名に合う行があるかどうか？
    $row = $result->fetch_assoc();
    if(password_verify($acountpass, $row['acountpass'])) { // ハッシュ化したパスワードと入れられたパスワードが合うかどうか？
        $_SESSION['acountname'] = $acountname;    // サーバ側の処理のためにセッションにユーザ名を保存
        echo json_encode(["success" => true, 'acountname' => $acountname]);    // 画面に表示させるためにjsonに保存。
    }else{
        echo json_encode(['success' => false, 'message' => 'パスワードが間違っています。']);
}
}
else{
    echo json_encode(["success" => false, "message" => "アカウント名が違います。"]);
}


$conn -> close();
?>