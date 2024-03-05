// 1) Дан некоторый массив.Объедините элементы этого массива в строку с разделителем '-'
console.log("\t\t\t\tЗадание №1");
const arr1 = ["first", "second", "third", "fourth", "fifth"];
console.log(arr1.join('-'));

// 2) Пользователь вводит строку(prompt).Разделите эту строку на слова и выведите их на экран.
console.log("\t\t\t\tЗадание №2");
const words = prompt('введите ваши слова: ').split(' ');
console.log(words.join('\n'));

// 3) Преобразуйте дату из формата гггг-мм-дд в формат дд.мм.гггг, используя split и join.
console.log("\t\t\t\tЗадание №3");
const date = '2002-07-24';
console.log(date.split('-').reverse().join("."));

// 4) Вывести пользователей используя map foreach
console.log("\t\t\t\tЗадание №4");
let usersRecords = [{ name: 'John', id: 123, marks: 98, pole: "mentor", age: 35 },
{ name: 'Baba', id: 101, marks: 23, pole: "student", age: 12 },
{ name: 'yaga', id: 200, marks: 45, pole: "student", age: 18 },
{ name: 'Wick', id: 115, marks: 75, pole: "mentor", age: 24 }];
console.log("\t\t\tWith map:");
usersRecords.map(el => console.log(el))
console.log("\t\t\tWith forEach:");
usersRecords.forEach(el => console.log(el))

// 5) Получить индекс пользователя у которого age равен 18
console.log("\t\t\t\tЗадание №5");
console.log(usersRecords.findIndex(el => el.age === 18));

// 6) Получить имена студентов и вывести из в одну СТРОКУ
console.log("\t\t\t\tЗадание №6");
const result = usersRecords.map(el => el.name).join(", ");
console.log(result);

// 7) Получить студентов у которых marks больше 44 и добавить к ним еще 20 marks, т.е было 30 станет 50
console.log("\t\t\t\tЗадание №7");
const rez1 = usersRecords.reduce((acc, user) => user.marks > 44 ? [...acc, { ...user, marks: user.marks + 20 }] : acc, []);
console.log("rez1: ", rez1);
const rez2 = usersRecords.filter(user => user.marks > 44).map(student => ({ ...student, marks: student.marks + 20 }));
console.log("rez2: ", rez2);
