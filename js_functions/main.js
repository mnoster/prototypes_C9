function myMessage() {
    console.log("My Message has been logged to the console");
}

function add(x,y){
    console.log(x + y);
}
function add2(x,y){
    var total = x+y;
    return total;
} 
var add_result2 = add2(4,5);
//console.log(add);

function cardFlip (flip){
    $(flip).hide();
}