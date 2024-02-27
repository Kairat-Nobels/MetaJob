// Логические операторы

// || - или
// && - и
// ! - не
// ?? - оператор нулевого слияния

// result = a || b
// 1 - true
// 0 - false
// console.log("true || true: ", true || true)
// console.log("true || false: ", true || false)
// console.log("false || true: ", false || true)
// console.log("false || false: ", false || false)
// console.log("false || true || false: ", false || true || false)

// let bread = false;
// let milk = false;

// console.log(bread || milk);

// let first = 0, second = 0, third = undefined;
// let result = first || second || third;
// alert(result)

// if ("" || 0 || undefined) console.log("hello");
// else console.log('object');

// let user1 = {
//     name: "Tariel",
//     mentor: true
// }

// let user2 = {
//     name: "Bektur",
//     mentor: false
// }

// console.log(user2.mentor ? "You are mentor" : "You are not")

// let hour = 9;
// if (hour < 10 || hour > 18) console.log("офис закрыт");

//? && (и)
// result = a && b

// console.log("true && true: ", true && true)
// console.log("true && false: ", true && false)
// console.log("false && true: ", false && true)
// console.log("false && false: ", false && false);
// console.log("false && true && false: ", false && true && false)

// let user1 = {
//     name: "Tariel",
//     mentor: true
// }

// let user2 = {
//     name: "Bektur",
//     mentor: true
// }

// console.log((user2.mentor && user1.mentor) ? "You are mentor" : "You are not")

let third = 'text';
let second = true;
let first = 1;
let four = 23;

let result = third && first || second;
alert(result)

// ! - (не)

