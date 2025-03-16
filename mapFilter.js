//1. Map

const names = ["Saad", "Suha", "Sheza", "Saad", "Saad"];

console.log(names.map((x) => x + 1)); //[ 'Saad1', 'Suha1', 'Sheza1' ]

//2. Filter

console.log(
  names.filter((x) => {
    if (x === "Saad") {
      return false;
    } else {
      return true;
    }
  })
); //[ 'Suha', 'Sheza' ]
