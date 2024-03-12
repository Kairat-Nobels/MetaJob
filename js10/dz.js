// 1) Измените программу, которая будет выводить только ключи объекта на консоль.
console.log("\t\t\t\tЗадание №1");
const obj = {
    name: "kairat",
    age: 21,
    haveDog: false
}
for (let key in obj) {
    console.log(key);
}

// 2) Напишите программу, которая перебирает свойства объекта и удаляет свойства, значение которых равно null. 
console.log("\t\t\t\tЗадание №2");
const obj2 = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};
console.log("obj: ", obj2);
for (let key in obj2) {
    if (obj2[key] === null) delete obj2[key];
}
console.log("obj after delete: ", obj2);

// 3) Напишите программу, которая проверяет, содержит ли объект определенное свойство.
console.log("\t\t\t\tЗадание №3");
const contain = (obj, key) => {
    for (let k in obj) {
        if (k === key) return true;
    }
    return false;
}
console.log(contain(obj2, "a"));
// 4) Напишите программу, которая находит среднее значение числовых элементов массива.Чтобы найти среднее значение, вы должны сперва суммировать эти значения и поделить сумму на количество значений
console.log("\t\t\t\tЗадание №4");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sred = (arr) => {
    if (Array.isArray(arr) && arr.length > 0 && arr.every(el => typeof el === "number")) return arr.reduce((acc, cur) => acc + cur) / arr.length;
    return false
}
console.log(sred(arr));
// 5) Напишите программу, которая находит среднее значение числовых элементов массива.
console.log("\t\t\t\tЗадание №5");
console.log(sred(['kairat']));
// 6) Вывести все ключи и значения массива, содержащего списки студентов по классам.
const studentsByClass = [
    ["1A", ["Alice", "Bob", "Charlie"]],
    ["2B", ["David", "Emily", "Frank"]],
    ["3C", ["Grace", "Henry", "Ivy"]]
];
console.log("\t\t\t\tЗадание №6");
for (let el of studentsByClass) {
    console.log(`Class: ${el[0]} - ${el[1].join(', ')}`);
}
