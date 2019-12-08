/**
 * nameless function => function ကို variable တစ်ခုထဲ asign ထည့်
 * arrow function '=>'
 */
function add(a, b) {
   return a + b;
}

var sub = function (a, b) {
   return a - b;
}

var mul = (a, b) => { return a * b };

var div = (a, b) => a / b;

console.log(mul(2, 2));