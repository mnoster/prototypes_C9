<!doctype html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
</head>
<body>
<form id="file_upload" enctype="multipart/form-data">
    <input type="file" name="upload_file">
    <input name="description" type="text">
</form>
<button type="submit" id="submit">submit</button>
</body>
<script>
    //	$(document).ready(function(){
    //		send_img_ajax();
    //	});
    $('#submit').on('click', function () {
        send_img_ajax();
    });
    function send_img_ajax() {
        var upload_file_form = $('#file_upload');
        $.ajax({
            url: "file_handler.php",
            method: "POST",
//			dataType: "text",
            data: new FormData(upload_file_form),
            processData: false,
            contentType: false,
            success: function (response) {
                console.log("You successfully connected: ", response);
            },
            error: function (response) {
                console.log("There was an error: ", response);
            }
        })
    }

</script>
</html>