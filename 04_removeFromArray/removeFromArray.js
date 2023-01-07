const removeFromArray = function(array, ...rest) { 
 let words = [...rest];
 for (let word of words) {
    array = array.filter(x => x !== word)
 }
 return array
};


// Do not edit below this line
module.exports = removeFromArray;
