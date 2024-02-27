console.log("\t\t\t\tЗадание №1");
// 1) Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 14;
if (age >= 14 && age <= 90) console.log("age is between 14 and 90 (included)");
else console.log("age is not between 14 and 90");

console.log("\t\t\t\tЗадание №2");
// 2) Выберите правильный логический оператор в следующем выражении, чтобы в результате было отображено значение переменной b.
let a = "", b = 7, c = 1, d = 2;
alert(a || c && b || d);
console.log(a || c && b || d);

console.log("\t\t\t\tЗадание №3");
const users = [
    {
        age: 21,
        hasLicense: true
    },
    {
        age: 16,
        hasLicense: true
    },
    {
        age: 17,
        hasLicense: false
    },
    {
        age: 18,
        hasLicense: false
    }
];
// 3) Напишите условие, которая принимает 2 переменные: age(возраст) и hasLicense(есть ли у человека водительские права).Условие должно возвращать true, если человеку уже исполнилось 18 лет и у него есть водительские права, и false в противном случае.

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].hasLicense) console.log(`user №${i + 1} прошёл ✅: `, true);
    else console.log(`user №${i + 1} ✖ : `, false);
}

console.log("\t\t\t\tЗадание №4");
// 4) Создайте переменную age и присвойте ей значение вашего возраста.Создайте условие, которое проверяет, является ли ваш возраст либо меньше 18, либо больше 65. Если условие истинно, выведите сообщение в консоль о том, что вы либо слишком молоды, либо вам нужно отдыхать и не писать код.Если условие ложно, выведите сообщение о том, что ваш возраст подходит для выполнения этой задачи.

let myAge = 21;
console.log((myAge < 18 || myAge > 65) ? "вы либо слишком молоды, либо вам нужно отдыхать и не писать код" : "ваш возраст подходит для выполнения этой задачи");