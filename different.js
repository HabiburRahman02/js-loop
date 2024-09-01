// odd numbers

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i)
// }


// give me the list of numbers 1 to 30 divisible by 5;

// for(let i =1; i<=30; i++){
//     if(i%5 === 0){
//         console.log(i)
//     }
// }

// for(let i =1; i<=30; i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(i)
//     }
// }

// give me the sum of numbers 1 to 100 they are divisible by 3 and 5
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        sum += i
        console.log(sum)
    }
}
console.log('sum:', sum)