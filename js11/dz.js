// Есть объект let userData = {
//     name: "John"
// };
// 1) Добавьте к объекту свойство age, получите его через prompt
console.log("\t\t\t\tЗадание №1");
let userData = {
    name: "John"
};
userData.age = prompt('Age: ')
console.log("userData: ", userData);

// 2) Добавьте свойство underage c булевым значением, получаем значение через confirm
console.log("\t\t\t\tЗадание №2");
userData.underage = confirm('Underage: ')
console.log("userData: ", userData);

// 3) C помощью prompt получите ключ объекта.С помощью метода delete удалите это свойство с объекта
console.log("\t\t\t\tЗадание №3");
delete userData[prompt('Enter key for delete')]
console.log("userData: ", userData);

// 4) Добавьте к объекту свойство address, которая в свою очередь является объектом со свойствами: country, city, street.Постарайтесь использоваться несколько вариантов добавления чтобы закрепить каждый метод
console.log("\t\t\t\tЗадание №4");
userData["address"] = { country: 'Kyrgyzstan' };
userData.address.city = 'Bishkek';
userData = { ...userData, address: { ...userData.address, street: "Kiev" } };
console.log("userData: ", userData);
// 5) В консоле выведите все значения включая свойство в address
console.log("\t\t\t\tЗадание №5");
for (let key in userData) {
    if (typeof userData[key] === 'object') {
        for (let subKey in userData[key]) {
            console.log(`${key} - ${subKey}: ${userData[key][subKey]}`);
        }
    } else {
        console.log(`${key}: ${userData[key]}`);
    }
}
