//Create GLOBAL variable below here on line 2
var global_result = null;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                console.log('this is global result: ', global_result);

                var first_movie = 'first';
                // iterate over each element in the array
                for (var i = 0; i < global_result.length; i++){
                    // look for the entry with a matching `code` value
                    if (obj[i].code == first_movie){
                      console.log('we found it');
                        // obj[i].name is the matched result
                    }
                }
            }
        });
        console.log('End of click function');

    });

});