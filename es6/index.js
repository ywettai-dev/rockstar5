/**
 * variable ကြေညာနည်း [var, let, const]
 * var သည် function-scope
 * let သည် block-scope
 * အသုံးများသော Array method [map, filter] **မူရင်း Array တန်ဖိုးကိုမထိ 
 * map => Array content အားလုံးကို return ပြန်
 * filter => True ဖြစ်သော array content ကိုသာ return ပြန်
 * spread operator '...' => array ကို တန်ဖိုးတစ်ခုချင်းစီ အဖြစ်သို့ဖြည်ချ
 * object spread operator => object ကို variable အဖြစ်သို့ဖြည်ချ
 * property shorthand
 * javascript တွင် Class ကြေညာနည်း
 * nodejs module export အသုံးချနည်း
 * back-tick ကို အသုံးပြုပြီး ${} နှင့် variable တွေကို string နှင့်အတူရေးနည်း [ES6]
 */

var math = require('./math');

var nums = [1, 2, 3, 4, 5];

var nums2 = nums.map(i => { return i * 2 });

var nums3 = nums.filter(i => i % 2);

console.log(nums);
console.log(nums2);
console.log(nums3);

// spread operator

var x = [21, 33, 323];
var res = [...x, 666];

console.log(res);

// object spread operator

var city = { 'name': 'Yangon', 'rank': 7, 'uv_index': 15 };
var { name, rank, uv_index } = city;

console.log(name);

// property shorthand

var name = "Bob";
var age = 25;

// var user = { name: name, age: age};

var user = { name, age };

console.log(user);

// Class ဆောက်နည်း

class User {
   constructor(name) {
      this.name = name;
   }

   say() {
      console.log(`Hi, my name is ${this.name}!`);
   }
}

class Student extends User {
   study() {
      console.log(`Hi, I am ${this.name} and I study very hard!`);
   }
}

var tom = new User('Tom');

var tai = new Student('Tai');

tom.say();

tai.say();
tai.study();

// function from module exports [nodejs]
console.log(math.PI);

