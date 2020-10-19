const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = "";

    let exprArray = expr.split("*");
    exprArray = exprArray.filter(entry => entry.trim() != '');

    exprArray.forEach(element => {


        let subArray = element.match(/.{1,10}/g);

        subArray.forEach(str => {
            let morseString = "";
            let subString = str.match(/.{1,2}/g);

            subString.forEach(subSubString => {

                if (subSubString === "10") morseString += ".";
                if (subSubString === "11") morseString += "-";
            })


            result += MORSE_TABLE[morseString];

        })
        result += " ";

    });

    return result.slice(0, result.length - 1);
}

module.exports = {
    decode
}