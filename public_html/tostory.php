<?php
include("inc/connection.php");

$conn = DBconn();

$sql = "SELECT number_column FROM user3 WHERE acountname = $_SESSION['acountname']"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 結果を取得
    $row = $result->fetch_assoc();
    $number = $row['number_column'];

    // JSON形式で数値を返す
    echo json_encode(['number' => $number]);
} else {
    echo json_encode(['number' => null]);
}

$conn->close();
?>
