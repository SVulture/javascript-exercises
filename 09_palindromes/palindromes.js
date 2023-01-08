const palindromes = function (phrase) {
  let check = phrase.split('');
  check = check.reverse().filter(x => /[A-Za-z]/.test(x)).join('');
  phrase = phrase.split('').filter(x => /[A-Za-z]/.test(x)).join('');  
  let res;  
  phrase.toLowerCase() === check.toLowerCase() ? res = true : res = false
  return res
};

// Do not edit below this line
module.exports = palindromes;
