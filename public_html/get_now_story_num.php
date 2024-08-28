<?php
session_start();
include("inc/connection.php");

$conn = DBconn();

if (isset($_SESSION['acountname'])) {
    $acountname = $_SESSION['acountname'];

    // Prepare the SQL statement to avoid SQL injection
    $stmt = $conn->prepare("SELECT now_story_num FROM users3 WHERE acountname = ?");
    $stmt->bind_param("s", $acountname);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Fetch the result
        $row = $result->fetch_assoc();
        $now_story_num = (int)$row['now_story_num']; // Cast to int to ensure it's an integer

        // Echo the number directly
        echo $now_story_num;
    } else {
        echo 3; // Return -1 or another specific value indicating user not found
    }

    $stmt->close();
} else {
    echo 4; // Return -1 or another specific value indicating session not set
}

$conn->close();
?>
