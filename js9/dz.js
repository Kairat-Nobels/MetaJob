console.log('\t\t\t\tЗадание 1');
// 1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

console.log('\t\t\t\tЗадание 2');
// 2) Выведите простые числа с массива let arr = [1, 3, 4, 6, 9, 11, 24, 17]
let arr = [1, 3, 4, 6, 9, 11, 24, 17];
console.log("arr: ", arr);
console.log("Простые числа: ", arr.filter(el => {
    if (el === 1) return false;
    for (let i = 2; i <= Math.sqrt(el); i++) if (el % i === 0) return false;
    return true;
}));

console.log('\t\t\t\tЗадание 3');
// 3) Используя цикл выведите массив в обратном порядке из let arr = [1, 3, 4, 6, 9, 11, 24, 17], вывод: [17, 24, 11, 9, 6, 4, 3, 1]
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
console.log(reversed);

console.log('\t\t\t\tЗадание 4');
// 4) Создайте цикл while, который выводит в консоль числа от 3 до 7.
let iter = 3;
while (iter < 7) {
    console.log(iter);
    iter++;
};

console.log('\t\t\t\tЗадание 5');
// 5) Напишите программу, которая находит первое четное число в массиве и выводит его.Если четных чисел нет, выведите сообщение Нет четного числа
let arr2 = [1, 3, 5, 7, 9, 11, 21, 19];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
        break;
    }
    else if (i === arr2.length - 1) console.log("Нет четного числа");
}

console.log('\t\t\t\tЗадание 6');
// 6) Напишите программу, которая выводит все числа от 1 до 10, кроме числа 5.
for (let i = 1; i < 10; i++) {
    if (i !== 5) console.log(i);
}