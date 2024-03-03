// ? Методы массивов (простые)

// const arr = [1, 2, "dad", false, undefined]
// console.log(arr);
// const lastItem = arr.pop()
// console.log(arr);

// let phoneNumbers = [333, 444, 555, 666, 111, 999]
// console.log(phoneNumbers);
// splice
// let splicedItems = phoneNumbers.splice(-1, 0, "fjalsfja", "ajfljasl")
// 1ый аргумент - индекс с которой нужно начать
// 2ой аргумент - количество сколько нужно вырезать
// последующие аргументы это новые добавляемые элементы
// splice изменяет массив и отдает новый массив вырезаннх элементов

// slice
// let letters = ['a', 'b', 'c', 'd'];
// console.log(letters);
// let sliced = letters.slice(1, 2);
// console.log("sliced: ", sliced);
// console.log(letters);

// в отличие от splice, slice не изменяет массив
// 2 аргумент не обязателен
// скопирует в новый массив элементы в указанном

// 1) Создайте массив numbers с числами от 1 до 5. Используйте метод splice, чтобы удалить элементы со второго по четвертый.
// 2) Создайте массив fruits с несколькими названиями фруктов.Используйте метод splice, чтобы удалить второй и третий элементы из массива вставить на их место "Banana" и "Orange".
// 3) Создайте массив originalArray с некоторыми элементами.Используйте метод slice, чтобы создать копию массива с нужными элементами.
// 4) У вас есть несколько массивов arr1, arr2 и arr3.Используйте метод concat, чтобы объединить их в один массив.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.splice(1, 3)
console.log(numbers);

let fruits = ["apple", "watermelon", "limon"];
console.log(fruits);
fruits.splice(1, 2, "Banana", "Orange")
console.log(fruits);

let originalArray = [1, 2, 3, 4, 5]
let copy = originalArray.slice(1, 4)
console.log(copy);

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [11, 12, 13, 14, 15]

let allArr = arr1.concat(arr2).concat(arr3)
console.log(allArr);