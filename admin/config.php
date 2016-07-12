<?php

/* Connect to the database */
$mysqli = new mysqli("localhost", "root", "root", "armygame");

/* Connection error check */
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

?>