<?php

include("inc/connection.php");

$conn = DBconn();

$story_num = 
$story_name = 'story' + strval($story_num)

$stmt = $conn->prepare("SELECT * FROM users3 WHERE acountname = ?");
$stmt->bind_param("s", $_SESSION['acountname']);
$stmt->execute();
$result = $stmt->get_result();

if($result1->num_rows == 0){
    $row = $result->fetch_assoc();
    $story_json = $row['STORY'];
    $data = json_decode($story_json, true);
    if (array_key_exists($story_name,$story_json)){
        echo "もうすでにあります"
    }else{
        $data[$story_name] = 1;
        $new_json_data = json_encode($data, JSON_UNESCAPED_UNICODE);
        $update_sql = "UPDATE your_table SET json_column = ? WHERE id = ?";
        $conn = quary($update_sql);
        $update_stmt->close();
    }
}else{
    echo "データベースエラーです。";
}

$stmt->close();
$conn->close();
?>