// Задание 1
// Напишите функцию, которая принимает в себя строку(параметр) и убирает из неё все пробелы. (возвращает строку без пробелов)
// "    hello my friends   " -- > "hellomyfriends"
console.log("\t\t\t\tЗадание №1");
function myTrim(str) {
    return str.replace(/ /g, '');
}
console.log(myTrim("    hello my friends   "));
// Задание 2
// Напишите функцию, которая принимает массив и возвращает его последний элемент
console.log("\t\t\t\tЗадание №2");
const arr = [1, 2, 3, 4, 5, 6]
function last(arr = []) {
    return arr[arr.length - 1];
}
console.log(last(arr));
// Задание 3
// Напишите функцию, которая принимает два массива, соединяет их и возвращает
console.log("\t\t\t\tЗадание №3");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10]
function myConcat(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(myConcat(arr1, arr2));
// Задание 4
// Напишите функцию, которая принимает в себя строку и делает первую букву заглавной
// Например: 'привет' -- > 'Привет'
console.log("\t\t\t\tЗадание №4");
const Capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1, str.length);
}
console.log(Capitalise('привеТ'))