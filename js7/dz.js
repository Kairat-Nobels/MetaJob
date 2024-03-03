// 1) В массив const brandsArr = ['google', 'apple', 'microsoft'] добавьте строки 'xiaomi', 'huawei', 'oneplus'
// Для сохранения новых элементов используйте как минимум два разных способа, экспериментируйте и постарайтесь понять разницу между разными способами.Выведите результаты всех найденных способов в консоль.
console.log("\t\t\t\tЗадание №1");
const brandsArr = ['google', 'apple', 'microsoft'];
brandsArr.push('xiaomi', 'huawei', 'oneplus');
console.log("brandsArr: ", brandsArr);
const brandsArr2 = ['google', 'apple', 'microsoft'];
brandsArr2.splice(brandsArr2.length, 0, 'xiaomi', 'huawei', 'oneplus')
console.log("brandsArr2: ", brandsArr2);
let brandsArr3 = ['google', 'apple', 'microsoft'];
brandsArr3 = brandsArr3.concat(['xiaomi', 'huawei', 'oneplus'])
console.log("brandsArr3: ", brandsArr3);
let brandsArr4 = ['google', 'apple', 'microsoft'];
brandsArr4 = [...brandsArr4, 'xiaomi', 'huawei', 'oneplus'];
console.log("brandsArr4: ", brandsArr4);

// 2) Создайте массив имен и с добавьте в конец массива новое имя использую prompt, после таким же образом добавляем второе имя, только уже в начало массива
console.log("\t\t\t\tЗадание №2");
const arr = ["name1", "name2", "name3"];
arr.push(prompt("Введите ваше имя:"));
arr.unshift(prompt("Введите второе имя:"));
console.log("arr: ", arr);

// 3) У вас есть массив colors, содержащий цвета.Используйте метод splice, чтобы удалить второй элемент массива и затем добавить новый элемент "green".Выведите обновленный массив в консоль.
console.log("\t\t\t\tЗадание №3");
const colors = ["red", "white", "blue", "yellow"];
console.log("colors before splice: ", colors);
colors.splice(1, 1, "green");
console.log("colors after splice: ", colors);
// 4) У вас есть массив numbers, содержащий числа от 1 до 10. Используйте метод slice, чтобы получить подмассив, содержащий элементы с пятого по восьмой включительно.Выведите полученный подмассив в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(4, 8));
