//Create GLOBAL variable below here on line 2
var global_result = null;
var movie_list = null;

$(document).ready(function(){
    $('button').one('click', function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                var movie_list = result.feed.entry; //shortens the code into a new variable
                for(var i = 0; i< movie_list.length; i++){ //for each movie
                    var director = movie_list[i]['im:artist'].label;  // director variable to the label of the 'im:artist' property of the movie
                    var title = movie_list[i]['im:name'].label;
                    var all_imgs = result.feed.entry[i]['im:image'][2].label;
                    var movie_image = $('<img>').attr('src', all_imgs);
                    var director_titles = $('<h2>').text('Title: ' + title + ' , Director Name: ' +  director);
                    $('#main').css({'text-align':'center'}).append(movie_image,director_titles);
                }
            }
        });
        console.log('End of click function');
    });
});