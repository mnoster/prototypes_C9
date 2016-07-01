// Answer the questions here:

// - What do you think is going to happen?

// - What happened?

// - Why?

//========== Write your code below ===========//

$(document).ready(function(){
//---------------this will display the # of the button clicked in the console---------------
    $('#list button').on('click',function(){
        console.log($(this).text());
    });
//----------adding a DOM element which is a button that will be added to the end of the list------------
    var new_li_item = $('<li>',{
        appendTo:$('#list')
    });
    var $button5 = $('<button>',{
      appendTo: $(new_li_item),
      text: "Delegated Button #5 handler",
      style: 'margin: 10px'
    });





    


});