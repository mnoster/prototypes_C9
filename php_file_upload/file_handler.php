<!-- File Handler -->
<pre>
    <?php
    ?>
</pre>
<pre>
<?php
//print_r($_FILES['upload_file']);
//print_r($_POST);
?>
</pre>

<?php


$target_dir = file_get_contents('uploads/'); //variable to hold target directory
$target_file = $target_dir . $_FILES['upload_file']['name'];// this will create a file path using directory
$uploadOK = true; //Flag used for error output
$output = []; //array to hold output




?>
<pre>
    <?php
    if (!empty('uploads')) {
        $image_name = pathinfo($_FILES['upload_file']['name']);
        print_r($image_name['extension']);
    }
    ?>
</pre>
