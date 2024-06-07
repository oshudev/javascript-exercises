const reverseString = function (phrase) {
    let reverseString = "";

    for (let i = phrase.length - 1; i >= 0; i--) {
        reverseString += phrase.charAt(i);
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
