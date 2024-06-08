const palindromes = function (word) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = word
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");
    const reversed = cleanedString.split("").reverse().join("");
    console.log(cleanedString);
    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
