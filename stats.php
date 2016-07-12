<?php

include_once("admin/config.php");

$data = mysqli_real_escape_string($mysqli, $_POST['data']);
parse_str($data);

$sql = "INSERT INTO battledata (winner, loser, winner_casualties, loser_casualties)
		VALUES ('$winner', '$loser', '$winner_casualties', '$loser_casualties')";

if ($mysqli->query($sql) === TRUE) {
    echo "The battle has been recorded for posterity.";
} else {
    echo "Error: " . $sql . "<br/>" . $conn->error;
}

$mysqli->close();

?>