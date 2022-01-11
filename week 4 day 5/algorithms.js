
// array chunking

/*array = [8, 9, 2, 3, 4, 6, 5, 1, 9]

function chunkArray(num) {
    let newArray = []
    for (let index = 0; index <= array.length; index++) {
        let temp = array.slice(0, num)
        newArray.push(temp)
        array.splice(0, num)
    }
    if (array.length > 0) {
        let temp = array.slice(0, num)
        newArray.push(temp)
    }
    console.log(newArray)
}

chunkArray(3)*/

/*function chunkArray(array, size) {
    let result = []
    for (value of array) {
        let lastArray = result[result.length - 1]
        if (!lastArray || lastArray.length == size) {
            result.push([value])
        } else {
            lastArray.push(value)
        }
    }
    console.log(result)
}



chunkArray([8, 9, 2, 3, 4, 6, 5, 1, 9], 4)*/

array = [8, 9, 2, 3, 4, 6, 5, 1, 9, 10, 0, 3, 5, 4, 7]

function chunkArray(size, position) {
    let temp = array.slice(size * (position - 1), size * position)
    console.log(temp)
}

chunkArray(5, 3)


alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



function shiftWord(word, number) {
    let result = ""
    for (let index = 0; index < word.length; index++) {
        temp = alphabet.findIndex(letter => letter === word[index])
        if (temp + number > 25) {
            letter = alphabet[temp + number - 26]
            result += letter
        } else {
            letter = alphabet[temp + number]
            result += letter
        }
    }
    console.log(result)
}

shiftWord("PIZZA", 2)


