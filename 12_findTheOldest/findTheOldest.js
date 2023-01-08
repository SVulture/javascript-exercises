/*const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]*/

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
  //console.log(people);
  return people[0];
};

//findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
