const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    let sum = 0;
    let smallerNumber = num1;
    let largerNumber = num2;
    if (num1 > num2) {
        largerNumber = num1;
        smallerNumber = num2
    }
    while (smallerNumber <= largerNumber) {
        sum += smallerNumber;
        smallerNumber++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
