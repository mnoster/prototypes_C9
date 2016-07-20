//Create GLOBAL variable below here on line 2
var global_result = null;
var movie_list = null;

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
                var first_movie = global_result.feed.entry[0]['im:image'][0].label;
                movie_list = result.feed.entry;
                console.log('first movie img: ' + first_movie);
                global_result = first_movie;
                console.log('movie list length: ' + movie_list.length);
                for(var i = 0; i< movie_list.length; i++){
                    console.log(result.feed.entry[i]['im:image'][2])
                }
            }
        });
        console.log('End of click function');
    });
});