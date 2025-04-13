const findTheOldest = function (peopleArr) {
  return peopleArr.sort((p1, p2) => getAge(p2) - getAge(p1))[0];
};

function getAge(person) {
  return (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
