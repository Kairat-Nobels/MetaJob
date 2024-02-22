//? 1) if else
// let level = Number(prompt("Enter a level(number)"))

// if (isNaN(level)) console.log("ты что тупой, ты должен ввести число.");
// else {
//     console.log((level <= 11 && level >= 1) ? (level === 5 ? "5-тый этаж в данное время не работает" : `лифт едет на ${level} этаж `) : "we have only 1-10 levels");
// }

//? 2) switch
// let mentor = "Ayana"
// switch (mentor.toLowerCase()) {
//     case "kairat":
//     case "tariel":
//     case "ayana":
//         console.log(`Здраствуйте ментор ${mentor}, как провели урок?`);
//         break;
//     default:
//         console.log('вы не ментор.');
// }

//? 3) тернарный оператор
const user = {}
user.name = prompt("Enter your name: ");
user.age = prompt("enter your age: ");
user.isHuman = confirm("are you human: ");

console.log(`hello ${user.name}, you are${user.isHuman ? "" : " not"} human`);