//? Задание №1
console.log('\t\t\t\tЗадание 1');
let num1 = 10;
let num2 = Number(prompt("Please enter a number: "));
let sum = 0;
if (isNaN(num2)) console.log("Вы ввели не число");
else {
    sum = num1 + num2;
    console.log("sum = ", sum);
}

//? Задание №2
console.log('\t\t\t\tЗадание 2');
let number = 34;
console.log("number: ", number, "\ntype number = ", typeof number);
number = String(number);
console.log("number: ", number, "\ntype number = ", typeof number);


//? Задание №3
console.log('\t\t\t\tЗадание 3');
let str = '123'
let str1m = Number(str);
console.log('str = ', str, '\nstr1m = ', str1m);
let str2m = parseInt(str);
console.log('str = ', str, '\nstr2m = ', str2m);
let str3m = +str;
console.log('str = ', str, '\nstr3m = ', str3m);


//? Задание №4
console.log('\t\t\t\tЗадание 4');
let value = "kairat"
let bool1 = Boolean(value)
console.log('value = ', value, "\nbool1 = ", bool1);
let bool2 = !!value;
console.log('value = ', value, "\nbool2 = ", bool2);


//? Задание №5
console.log('\t\t\t\tЗадание 5');
let text = "text";
let textBool = !!text;
console.log("text = ", text, "\ntextBool = ", textBool);


//? Задание №6
console.log('\t\t\t\tЗадание 6');
let bool = true;
let boolToS = true.toString();
console.log("bool = ", bool, "\nboolToS = ", boolToS);


//? Задание №7
console.log('\t\t\t\tЗадание 7');
let num = 43;
console.log("num = ", num, "\ntype num = ", typeof num);
num = num.toString();
console.log("num = ", num, "\ntype num = ", typeof num);
num = +num;
console.log("num = ", num, "\ntype num = ", typeof num);

