const findTheOldest = function(people) {
  
  for (let person of people) {
    if (person.yearOfDeath) {
        person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
        const today = new Date();
        const year = today.getFullYear();
        person.age = year - person.yearOfBirth;
    }    
  }  
  people = people.sort((a,b) => b.age - a.age); 
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
