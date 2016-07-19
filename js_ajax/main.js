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
                var first_movie = global_result.feed.entry[0].image[2].label;
                console.log(first_movie);
            }
        });
        console.log('End of click function');
    });
});