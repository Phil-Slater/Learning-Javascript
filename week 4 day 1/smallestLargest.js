
// Using bubble sort method

let array = [3, 4, 1, 6, 7, 9, 8]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

// Largest
console.log(array[array.length - 1])

// Smallest
console.log(array[0])