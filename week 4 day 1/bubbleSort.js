
let array = [3, 4, 5, 6, 7, 8, 1]


// Ascending Order
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log(array)



// Descending Order
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log(array)