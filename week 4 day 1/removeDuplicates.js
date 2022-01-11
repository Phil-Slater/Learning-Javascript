let friends = ["John", "Mary", "Alex", "Steve", "Mary", "John", "Joe", 'Joe', 'John', 'Steve']

let newFriends = []

for (let index = 0; index < friends.length; index++) {
    if (newFriends.includes(friends[index])) {
        continue
    }
    else {
        newFriends.push(friends[index])
    }
}

console.log(newFriends)