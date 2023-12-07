const leapYears = function(year) {
    divisibleBy4 = year % 4 === 0;
    divisibleBy100 = year % 100 === 0;
    divisibleBy400 = year % 400 === 0;

    if (divisibleBy4) {
        if (divisibleBy100) {
            return divisibleBy400 ? true : false;
        }
        return true;  
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
