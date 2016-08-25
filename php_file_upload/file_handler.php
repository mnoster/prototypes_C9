<!-- File Handler -->

<pre>
    <?php
    ?>
</pre>
<pre>
<?php
print_r($_FILES['upload_file']);
print_r($_POST);
?>
</pre>

<?php


$target_dir = 'uploads/'; //variable to hold target directory
//$target_file = $target_dir . $_FILES['file_to_upload']['name'];// this will create a file path using directory
//$uploadOK = true; //Flag used for error output
//$output = []; //array to hold output
//
//
//if (!empty($target_dir)) {
//    pathinfo($_FILES['name']);
//    print($_FILES['name']);
//}

?>
<pre>
    <?php
    print($target_dir);
    ?>
</pre>
