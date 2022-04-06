const getLuckyGuy = (personsNumber, loserNumber) => {
  const persons = [...Array(personsNumber).keys()];

  let checkingPerson = 0;
  let loserCounter = 1;
  let livesCounter = personsNumber;

  while (true) {
    if (persons[checkingPerson] === -1) {
      checkingPerson = getPerson(checkingPerson, personsNumber);

      continue;
    }

    if (loserCounter !== loserNumber) {
      checkingPerson = getPerson(checkingPerson, personsNumber);
      loserCounter++;

      continue;
    }

    persons[checkingPerson] = -1;
    loserCounter = 1;
    checkingPerson = getPerson(checkingPerson, personsNumber);
    livesCounter = livesCounter - 1;

    if (livesCounter === 1) {
      return persons.find((person) => person !== -1) + 1;
    }
  }
};

const getPerson = (person, length) => (person === length - 1 ? 0 : person + 1);

console.log(getLuckyGuy(10, 12));
