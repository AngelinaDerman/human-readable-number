module.exports = function toReadable(number) {
    let words = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    }
    let resultString = "";
    number = (number).toString();

    if (number <= 20) {
        return words[number];
    } else if (number.length === 2) {
        
        if (number[1] == "0") {
            return words[number];
        } else {
            const arrNumber = number.split("");
            resultString += ` ${words[arrNumber[0] + "0"]} ${words[arrNumber[1]]}`;
        }
    } else if (number.length === 3) {

        if (number[1] == "0" && number[2] == "0") {
            return `${words[number[0]]} hundred`;
        }else if( (number[1] + number[2]) <= 20){
            return `${words[number[0]]} hundred ${words[parseInt(number[1] + number[2])]}`;
        }else {
            let resultStr = `${words[number[0]]} hundred ${words[number[1] + "0"]}`;
            number[2] == "0" ? "" : resultStr += ` ${words[number[2]]}`;
            return resultStr;
        }
    }
    return resultString.trim();
}