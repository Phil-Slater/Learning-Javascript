
function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('Fizz Buzz')
    }
    else if (number % 3 == 0) {
        console.log('Fizz')
    }
    else if (number % 5 == 0) {
        console.log('Buzz')
    }
}

fizzBuzz(30)
fizzBuzz(12)
fizzBuzz(14)
fizzBuzz(20)
