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
                // var first_movie = global_result.feed.entry[0]['im:image'][0].label;
                var movie_list = result.feed.entry; //shortens the code into a new variable
                
                for(var i = 0; i< movie_list.length; i++){ //for each moive
                    var director = movies[i]['im:artist'].label;  // director variable to the label of the 'im:artist' property of the movie
                    var title = movies[i]['im:name'].label;
                    var all_imgs = result.feed.entry[i]['im:image'][2].label;
                    var movie_image = $('<img>').attr('src', all_imgs);
                    var new_div = $('<div id="main">');
                    $('#main').css({'height' : '400px' , 'width': '100%','background-color':'lightgrey'}).append(all_imgs);

                    console.log(all_imgs);
                }
            }
        });
        console.log('End of click function');
    });
});