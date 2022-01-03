let array = [4, 5, 1, 34, 76, 'Joe', 'Mary', 'Alice', 'soccer']

function checkArray(input) {
    if (array.includes(input)) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}

checkArray('soccer')
checkArray('football')
checkArray(1)