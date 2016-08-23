
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

<form method = "POST">
    Title: <input id="title" type ="text" name="title">
    Details: <input id="details" type ="text" name = "details">
    TimeStamp: <input id ="timestamp" type ="text" name ="timestamp">
    Speed: <input id = "speed" type ="text" name="speed">
</form>
    <button id="click_btn_send_to_db" type="submit">submit</button>
<script>
    $(document).ready(function(){
       $("#click_btn_send_to_db").on('click',function(){
           send_data_to_db();
       })
    });

    function send_data_to_db(){
        var title =  $('#title').val();
        var details = $('#details').val();
        var timestamp = $('#timestamp').val();
        var speed = $('#speed').val();

        console.log("title: ",  title);

     $.ajax({
         url: "mysql_connect.php",
         data: {title,details,timestamp,speed},
         method: "POST",
         success:function(response){
             console.log("send data was a success: " ,response);
         },
         error: function(response){
             console.log("there was a problem sending your data to the database: " , response);
         }
     });
    }
</script>