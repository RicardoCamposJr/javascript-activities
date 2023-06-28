arithmeticAverage = (...numbers) => {
    let i = 0;
    let sum = 0;
    numbers?.forEach(function (number) {
        sum += number 
        i++
    })
    return (sum/i) ?? 0
}

weightedAverage = (numbers) => {
    let sum = 0
    let i = 0
    numbers?.forEach((number) => {
        sum += number[0] * number[1]
        i += number[1]
    })
    return (sum/i) ?? 0
}

median = (...numbers) => {
    numbers?.sort((a,b) => a - b)
    console.log(numbers)
    if (numbers.length % 2 !== 0) {
        return numbers[numbers.length / 2]
    } else {
        const x = numbers[Math.floor(numbers.length / 2)]
        const y = numbers[Math.floor(numbers.length / 2) - 1]
        return (x + y) / 2
    }
}