// write a function that takes a string as input and retirns the count of vewels in that string. Consider "a", "e", "i", "o", "u" as vowels (both lowercase and uppercase)


function countvowels(str) {
    str = str.toLowerCase();
    let count = 0;
    const vowelsLetters = ['a', "e", "i", "o", "u"];

    str.split("").forEach(element => {
        if (vowelsLetters.includes(element)) {
            count++;
        }
    });

    return count;
}

console.log(countvowels("Hello World"))
console.log(countvowels("ThE qUick brown fOx"))
console.log(countvowels("Brrp"))