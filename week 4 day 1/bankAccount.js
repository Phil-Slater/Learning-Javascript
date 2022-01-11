
class BankAccount {

    constructor(firstName, lastName, middleName, accountType, balance) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = 'Open'
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (this.balance < 0) {
            console.log('Account is currently negative. You cannot withdraw until you add more funds.')
        }
        else {
            this.balance -= amount
            if (this.balance < 0) {
                this.balance -= 35
                console.log('Account overdrawn. $35 overdraft fee applied.')
            }
        }
    }

}

let checkingAccount = new BankAccount('Phillip', 'Slater', 'Daniel', 'Checking', 100)

let savingsAccount = new BankAccount('Phillip', 'Slater', 'Daniel', 'Savings', 500)

function transferToSavings(amount) {
    if (checkingAccount.balance < amount) {
        console.log('You do not have enough funds to transfer that amount.')
    }
    else {
        checkingAccount.balance -= amount
        savingsAccount.balance += amount
    }
}

function transferToChecking(amount) {
    if (savingsAccount.balance < amount) {
        console.log('You do not have enough funds to transfer that amount.')
    }
    else {
        savingsAccount.balance -= amount
        checkingAccount.balance += amount
    }
}

checkingAccount.deposit(250)
transferToSavings(150)

console.log(`$${checkingAccount.balance}`)
console.log(`$${checkingAccount.balance}`)

transferToSavings(250)
transferToChecking(10000)

console.log(`$${checkingAccount.balance}`)

checkingAccount.withdraw(250)

console.log(`$${checkingAccount.balance}`)

checkingAccount.withdraw(20)
