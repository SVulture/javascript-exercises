const leapYears = function(year) {
let res;
year % 4 !== 0 
  ? res = false
  : year % 400 === 0
  ? res = true 
  : year % 100 === 0
  ? res = false
  : res = true
return res
};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
