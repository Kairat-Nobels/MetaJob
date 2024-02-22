// 1
console.log('\t\t\t Задание №1');
const num = Number(prompt('Please enter a number'))
// or
// const num = 10;
if (isNaN(num)) console.log("you should enter a number");
else if (num % 2 === 0) console.log("Число четное", num)
else console.log("Число нечетное", num);

// 2
console.log('\t\t\t Задание №2');
const num2 = Number(prompt('Please enter a number for second exercise'));
if (isNaN(num2)) console.log("you should enter a number");
else if (num2 === 0) console.log("Число равно нулю", num2)
else if (num2 > 0) console.log("Число положительное", num2);
else console.log("Число отрицательное", num2);

//! почемуто не добавили 3 задание.
// 4
console.log('\t\t\t Задание №4');
const num4 = Number(prompt('Please enter a number for 4-th exercise'));
if (isNaN(num4)) console.log("you should enter a number");
else if (num4 === 0) alert(0);
else if (num4 > 0) alert(1);
else alert(-1);

// 5
console.log('\t\t\t Задание №5');
const val1 = Number(prompt('Please enter a first number for some math'));
const op = prompt('Please enter one of math operations: ( +, -, *, %)').trim();
const val2 = Number(prompt('Please enter a second number for some math'));
if (isNaN(val1) || isNaN(val2)) console.log("you should enter a number");
else {
    switch (op) {
        case "+":
            console.log(`${val1} ${op} ${val2} =`, val1 + val2);
            break;
        case "-":
            console.log(`${val1} ${op} ${val2} =`, val1 - val2);
            break;
        case "*":
            console.log(`${val1} ${op} ${val2} =`, val1 * val2);
            break;
        case "%":
            console.log(`${val1} ${op} ${val2} =`, val1 % val2);
            break;

        default:
            console.log("Вы ввели несуществующюю математическкую операцию: ", op);
            break;
    }
}

// 6
console.log('\t\t\t Задание №6');
let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
let a = Math.floor(Math.random() * 21) - 10;
let b = Math.floor(Math.random() * 21) - 10;

console.log("a = ", a, "\nb = ", b);

result = a + b < 4 ? "Мало" : "Много";
console.log("result = ", result);
