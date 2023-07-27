// const p = new Promise((resolved) => {
//     console.log("A promise está funcionando!")
//     setTimeout(() => {
//         console.log("Resolvendo a promise!")
//         resolved(true)
//         console.log(p)
//     }, 1000 * 3)
// })

// console.log(p)

// setTimeout(() => {
//     console.log("Outro processo...")
// }, 1000 * 1)

// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age) {
//             resolve(age > 18)
//         } else {
//             reject(new Error('age is required'))
//         }
//     })
// }

// function getAge(birthday) {
//     return new Promise((resolve, reject) => {
//         if (birthday) {
//             const birthYear = new Date(birthday).getFullYear()
//             const currentYear = new Date().getFullYear()
//             resolve(currentYear - birthYear)
//         } else {
//             reject(new Error('birthday is required'))
//         }
//     })
// }

async function asyncSum(x, y) {
    if (typeof x !== "number" || typeof y !== "number" ) {
        return Promise.reject("Erro!")
    } else {
        return x + y
    }
}

asyncSum(1, null).then(result => {
    console.log(result)
}).catch(err => {   
    console.log(err)
})