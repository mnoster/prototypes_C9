<!-- index_select.php -->
<?php
require_once("mysql_connect.php");



$query = 'SELECT ID, name, age ,email FROM `test_table1`';

$result = mysqli_query($conn,$query);
print('<pre>' .print_r($result,true) . '</pre>');

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        print('table data: ' . '<pre>' .print_r($row, true) . '</pre>');
    }
}
?>