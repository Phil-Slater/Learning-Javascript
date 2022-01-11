function checkPalindrome(word) {
    let reverseWord = ''

    for (let index = 0; index < word.length; index++) {
        reverseWord += word[word.length - 1 - index]
    }

    if (reverseWord == word) {
        console.log('is palindrome')
    }
    else {
        console.log('not a palindrome')
    }
}

checkPalindrome('tacocat')