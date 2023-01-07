const repeatString = function(word, num) {
  if (num >= 0) {
  let result = word.repeat(num);   
  return result;
  } else return 'ERROR';
};


// Do not edit below this line
module.exports = repeatString;
