const removeFromArray = function(arr, ...elementsToRemove) {
    return arr.filter(element => {
        for (let elementToRemove of elementsToRemove) {
            if (element === elementToRemove) {
                return false;
            }
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
