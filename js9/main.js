// for
// for (let i = 0; i >= -10; i--) {
//     console.log(i);
// }

// const array = ["ann", "Tom", "Jack"];
// for (el of array) {
//     console.log(el);
// }
// const candidates = [10, 1, 2, 7, 6, 1, 5];
// const target = 8;
// const combinationSum2 = function (candidates, target) {
//     let results = [];
//     candidates.sort((a, b) => a - b); // Sort candidates to handle duplicates properly

//     const backtrack = (startIndex, target, current) => {
//         if (target === 0) {
//             results.push([...current]);
//             return;
//         }

//         for (let i = startIndex; i < candidates.length; i++) {
//             // Skip duplicates to avoid duplicate combinations
//             if (i > startIndex && candidates[i] === candidates[i - 1]) {
//                 continue;
//             }

//             if (candidates[i] <= target) {
//                 current.push(candidates[i]);
//                 backtrack(i + 1, target - candidates[i], current);
//                 current.pop();
//             } else {
//                 break; // Since candidates are sorted, we can stop early
//             }
//         }
//     };

//     backtrack(0, target, []);
//     return results;
// };

// console.log(combinationSum2(candidates, target));

let users = [
    { name: "Tom", age: 20 },
    { name: "Mike", age: 20 },
]
let i = users.length - 1;
do {
    console.log(`My name is ${users[i].name}. I am ${users[i].age} years old`);
    i--;
} while (i >= 0)