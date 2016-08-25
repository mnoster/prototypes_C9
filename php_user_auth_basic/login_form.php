<?php
session_start();
?>
<script src="https://code.jquery.com/jquery-3.1.0.min.js"
        integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<form>
    <input id="username" name="username" type="text">
    <input id="password" name="password" type="text">

</form>
<button id="login" name="login">Login</button>

<script>
    $(document).ready(function () {
        $('#login').on('click', function () {
            verify_user();
        });
    });
    function verify_user() {
        var password = $('#password').val();
        var username = $('#username').val();
        $.ajax({
            url: 'login_handler.php',
            data: {
                'username': username,
                'password': password
            },
            cache: false,
            method: 'POST',
            dataType: 'json',
            success: function (response) {
                console.log("connected to server: ", response);
            },
            error: function (response) {
                console.log("there was an error during login: ", response);
            }
        });
    }

</script>
