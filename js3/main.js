// 1) строковое преобразование - String()

// let string = "djabshdbahjdb";
// let checkString = isString(string);
// console.log(checkString);

// alert("string");
// alert(5);

// alert(4 + 6);

// let value = 123;

// alert(typeof value);

// value = String(value);

// alert(typeof value);

// let value = false;
// console.log(value);
// console.log(typeof value);

// let value2 = String(null);  // "null"
// console.log(value2);
// console.log(typeof value2);

// 2) Численное преобразование - Number()

// let value = 123;
// console.log(Number.isInteger(value));

// alert("6" / "3"); // 2

// let str = "123";
// console.log(str);
// console.log(typeof str);

// let num = Number(str); //123
// console.log(typeof num);
// console.log(num);

// let age = Number("trasdasd");
// console.log(age);
// // alert(typeof age);

// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0
// console.log(Number(false)); //0
// console.log(Number(true));

// 3) Логическое преобразование - Boolean(), !!-знак приводящий к булевому типу ;

// 0, null, undefined, NaN, false, "" - false;
// все ост. значения - true;

// let string = "";
// console.log(!!string);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(" "));
// console.log(Boolean(""));
// console.log(Boolean(undefined), Boolean(null));

// имя,
// фамилия,
// отчество,
// является ли совершеннолетним

// let name = prompt("enter name");

// приветствие

// if (value >=) {
// логика при успешной проверке на условие
// } else {
// логика если условие не совпадёт
// }
// имя
// фамилия
// отчество
// является ли совершеннолетним

let name = prompt("Please enter name: ")
let surName = prompt("Please enter surname: ")
let otch = prompt("Please enter отчество: ")
let adult = prompt("please endter your age: ")

alert(`Приветствую вас ${surName} ${name} ${otch} ${Number(adult) >= 18 ? "вы совершеннолетний" : "Вам нет 18ти"}`);