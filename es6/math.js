// module export [nodejs]

var PI = 3.14;

function add(a, b) {
   return a + b;
}

function sub(a, b) {
   return a - b;
}

// module.exports = {
//    add: add,
//    PI: PI
// }

module.exports = { add, PI };

/**
 * module export [ES6] syntax
 * export const PI = 3.14
 * export function add(a, b){
 *    return a + b;
 * }
 * function sub(a, b){
 *    return a - b;
 * }
 *
 * တခြားfileကနေ import လုပ်ရင်လို
 *
 * import { add } from './math';
 * console.log(math.add(2, 3));
 */