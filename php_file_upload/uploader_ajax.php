<!doctype html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
</head>
<body>
<form id="file_upload">
    <input type="file" name="upload_file">
    <input name="description" type="text">
</form>
<button type="button" id="submit" >submit</button>
</body>
<script>
    $('#submit').on('click', function () {
        send_img_ajax();
    });
    function send_img_ajax(e) {
        var upload_file_form = $('#file_upload')[0]; //have to use the [0] because is a jQuery element and we later want to use it in javascript
        var formData = new FormData(upload_file_form); //it is javascript here not jQuery 
        console.log("form data: " , formData);
        $.ajax({
            url: "file_handler.php",
            type:'text',
            method: "POST",
            cache: false,
            mimeType: "multipart/form-data",
            data: formData,
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