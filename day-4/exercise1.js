input = [6, -5, 7, -2, 1, 4]
let sum = 0
input.forEach(val => {
    if(val > 0) {
        sum += val
    }
})
console.log(sum);