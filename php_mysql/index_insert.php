<!-- index_insert.php -->
<?php
require_once("mysql_connect.php");

$query = "INSERT INTO `todo_items` SET `title` = '$_POST[title]' , `details` = '$_POST[details]', `timestamp` = '$_POST[timestamp]' ";

$result = mysqli_query($conn,$query);

$affected_row = mysqli_affected_rows($conn);
if($affected_row > 0){
    print($affected_row . '<br>');
}

print_r($_POST);
?>

