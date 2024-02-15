// Типы данных
// Всего 8 типов данных
//? 1) number
// let value = 2;
// console.log(value);
// console.log(typeof value);

// let value2 = 4;
// console.log(value2);

// let sum = value2 / value;
// console.log(sum);

// let getInfinity = 2 / 0;
// console.log("getInfinity: ", getInfinity);

// console.log(typeof getInfinity);

// NaN - вычислительная ошибка

// alert("Не число" / 2);

// console.log(typeof NaN);
// alert(NaN + 1);

// typeof (x)
// console.log(typeof (5));

//? 2) string
// "kairat"
// 'test'

// let message = "Hello, world!";
// let message2 = "Привет мир";
// const nam = "Kairat";
// let message3 = `My name is ${nam} ${message}`;

// console.log(message3);
// console.log(message);
// console.log(typeof message);

// console.log(message2);

// let carInfo = `this car cost ${24000 - 10050} som`
// alert(carInfo);

//? 3) Boolean

// let isParent = true;
// let isChild = false;

// console.log(isParent, typeof isParent);
// console.log(isChild, typeof isChild);

// // <, >, ===, ==

// let toyota = 10000;
// let mersedes = 10000;

// let result1 = toyota == mersedes;
// console.log(result1);

// let a = 1;
// let b = "h1"
// let rez = b - 1;
// console.log(rez);

//? 4) null

// let variable = null;

// console.log(variable);
// console.log(typeof variable);

//? 5) undefined
// let table = '12123'
// console.log(table);

// let chair;
// console.log(chair, typeof chair);
// console.log(undefined);

//? 6) Symbol

// let data = Symbol("text");
// let data2 = Symbol("text");

// console.log(data);
// console.log(data2);
// console.log(typeof data);

// console.log("result = ", data == data2);

//? 7) BigInt
// const bigNumber = 123456789011234567890234567890123456789012345678907777777777n
// console.log(typeof bigNumber);

//? 8) Object

let user = {
    name: "kairat",
    age: 21,
    isStudent: true
}
console.log(user);

user.name = "Alex";
user.isStudent = false;
delete user.age;

user.surname = "Madagasckar"

let user2 = user;
console.log(user2);
