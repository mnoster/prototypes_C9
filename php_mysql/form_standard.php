
<form action = "index_insert.php" method = "POST">
    Title: <input type ="text" name="title">
    Details: <input type ="text" name = "details">
    TimeStamp: <input type ="text" name ="timestamp">
    Speed: <input type ="text" name="speed">
    <button type="submit">submit</button>
</form>
<?php
 print_r($_POST);
?>