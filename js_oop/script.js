/**
 * Created by njporter10 on 7/13/16.
 */
function Coin_stack(starting_amount) {
    this.value = starting_amount;
    function add_coins(amount_added) {
        this.added = amount_added + value;
    }
}
//     function remove_coins(amount_removed){
//         if(value >= amount_removed){
//             value - amount_removed;
//         }
//
//     }
// }
var my_coin_stack = new Coin_stack(50);
    console.log(my_coin_stack.added(3));

console.log('my_coin_stack contains ', my_coin_stack.value, ' coins');