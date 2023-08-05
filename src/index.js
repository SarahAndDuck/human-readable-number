module.exports = function toReadable(number) {
    let letters = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let lettersTeen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let lettersTy = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (!number) return "zero";

    let arrayOfnumberToStringToSplit = String(number).split("");
    let result = new Array();

    if (arrayOfnumberToStringToSplit.length == 1) {
        return letters[number];
    }

    if (arrayOfnumberToStringToSplit.length == 3)
        // console.log(letters[Number(arrayOfnumberToStringToSplit[0])] + " hundred");
        result.push(
            letters[Number(arrayOfnumberToStringToSplit[0])] + " hundred"
        );

    if (arrayOfnumberToStringToSplit.length >= 2) {
        if (arrayOfnumberToStringToSplit.slice(-2)[0] != 1) {
            //   console.log(lettersTy[Number(arrayOfnumberToStringToSplit.slice(-2)[0])]);
            result.push(
                lettersTy[Number(arrayOfnumberToStringToSplit.slice(-2)[0])]
            );
            //   console.log(letters[Number(arrayOfnumberToStringToSplit.slice(-2)[1])]);
            result.push(
                letters[Number(arrayOfnumberToStringToSplit.slice(-2)[1])]
            );
        }

        if (arrayOfnumberToStringToSplit.slice(-2)[0] == 1) {
            console.log(
                lettersTeen[Number(arrayOfnumberToStringToSplit.slice(-2)[1])]
            );
            result.push(
                lettersTeen[Number(arrayOfnumberToStringToSplit.slice(-2)[1])]
            );
        }
    }

    return result.filter((i) => i !== "").join(" ");
};
