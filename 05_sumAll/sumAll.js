const sumAll = function(num1, num2) {
let sum = 0;    
if (num1 < 0 || num2 < 0 || num2 !== +num2 || num1 !== +num1) {  
  return 'ERROR'
  } else {
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      sum +=i;      
    }    
  }  
return sum
};
 
module.exports = sumAll;