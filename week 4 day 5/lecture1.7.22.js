// ES6

// arrow functions

//window.setInterval(() => console.log("Hello"), 2000)

// Multi-line string

let greetings = `Hello World
    Hello to all!
    hello again!`

// default parameters - only used if items are not passed to function

function calculateArea(width = 100, height = 200) {
    return width * height
}

calculateArea(10, 20)
// default parameters will not be used

// Destructing Assignments

let fruits = ["Apple", "Banana"]

//let a = fruits[0]
//let b = fruits[1]

let [a, b] = fruits

console.log(a)
console.log(b)

let person = { name: "John", age: 56 }

let { name, age } = person

console.log(name)
console.log(age)





