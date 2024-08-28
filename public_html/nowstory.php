<?php
session_start();

include("inc/connection.php");

$conn = DBconn();

if ((isset($_GET['data'])) && isset($_SESSION['acountname']))  {
    $data = (int)$_GET['data']; // Cast to integer for safety
    $acountname = $_SESSION['acountname'];

    $stmt = $conn->prepare("SELECT * FROM users3 WHERE acountname = ?");
    $stmt->bind_param("s", $acountname);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $update_stmt = $conn->prepare("UPDATE users3 SET now_story_num = ? WHERE acountname = ?");
        $update_stmt->bind_param("is", $data, $acountname);
        $update_stmt->execute();
         
        echo $data;

        $update_stmt->close();
    }
    $stmt->close();
}else{
    echo "見つからん";
}

$conn->close();
?>