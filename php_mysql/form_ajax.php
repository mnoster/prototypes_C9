
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
        var title_txt =  $('#title').val();
        var details_txt = $('#details').val();
        var timestamp_txt = $('#timestamp').val();
        var speed_txt = $('#speed').val();
        console.log("title: ",  title_txt);

     $.ajax({
         url: "index_insert.php",
         method: "POST",
         data: {'title': title_txt,
             'details': details_txt,
             'timestamp':timestamp_txt
         },
         dataType: 'text',
         success:function(response){
             console.log("send data was a success: " ,response);
             $('input').val("");
         },
         error: function(response){
             console.log("there was a problem sending your data to the database: " , response);
         }
     });
    }
</script>