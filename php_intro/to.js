//EXERCISE 1
var variable1 = 'hello';
var variable2 = 4;
var variable3 = ['foo','bar'];


//EXERCISE 2
var variable1 = 4;
var variable1 = 'hello';


//EXERCISE 3
var numbers = [3,4,5,15,3,4,18];
var results = numbers[0];
for(var i = 1; i< numbers.length; i++){
    result += numbers[i];
}
console.log("Result = " + result);

//EXERCISE 4
console.log("this is a string " + "This is another string");


//EXERCISE 5
var my_float = 3.5;
var my_init = parseFloat(my_float);
var my_float2 = 5.3;
var init2 = math.round(my_float2);


//EXERCISE 6
if(my_var){
    console.log(my_var2);
}
else{
    console.log(my_var1);
}


//EXERCISE 7
var check_var = "What time is it?";
switch(check_var){
    case 'hello':
        console.log('greetings');
        break;
    case 'bye':
        console.log('good bye');
        break;
    default:
        console.log('it\'s party time!');
        break;
}


//EXERCISE 8

var student = [{'name': 'Skippy'},{'class':'English'},{'grade':75} ];


//EXERCISE 9
student = new stdClass();
student.name = 'Skippy';
student.grade = 75;
student.class = 'English';

//EXERCISE 10

var num_array =  [35, 2, 14, 56, 65, 52];
function find_greatest_num_and_index(direction){
    var greatest = null;
    var greatest_index = null;
    if(direction >= 0){
        var i = 0;
        var increment  = 1;
        var end_loop = num_array.length;
    }
    else{
        i = num_array.length;
        increment = -1;
        end_loop = 0;
        
    }
    while(i != end_loop){
        if(num_array[i] == greatest){
            greatest = num_array[i];
            greatest_index = i;
        }
         i += increment;
    }
    find_greatest_num_and_index(1);
}
