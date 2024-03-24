// Скидываем репозиторием!
// 1) Напишите функцию getFullName, которая принимает объект user с полями firstName и lastName, и возвращает полное имя.Если какое - либо из полей отсутствует, используйте значения по умолчанию.
console.log("\t\t\t\tЗадание №1");
function getFullName(user) {
    const { firstName = 'Nobel', lastName = 'Alfred' } = user;
    return `${firstName} ${lastName}`;
}
console.log(getFullName({ firstName: "Kairat", lastName: "Joloi uulu" }));
console.log(getFullName({}));
console.log(getFullName({ firstName: "Eminem" }));


// 2) Напишите функцию printCoordinates, которая принимает объект point с полями x и y, и выводит координаты точки.
console.log("\t\t\t\tЗадание №2");
function printCoordinates({ x, y }) {
    console.log("x:", x, "\ty:", y);
}
printCoordinates({ x: 23, y: 23 });
printCoordinates({ x: 10, y: 0 });
printCoordinates({ x: 0, y: 2 });
// 3) У вас есть вложенный массив const data = {   
//     products: [       
//         { id: 1, name: 'Product 1' },
//         { id: 2, name: 'Product 2' }
//     ]
// Напишите функцию, используя деструктуризацию выводите название продуктов:
// name: Product1
// name: Product2
console.log("\t\t\t\tЗадание №3");
const data = {
    products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' }
    ]
};

function getName({ products }) {
    for (let { name } of products) console.log("name: ", name);
}
getName(data)