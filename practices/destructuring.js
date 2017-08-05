// Destructing Assignment in ES6

//1
let { color, name, state, position } = {
  color: 'red',
  name: 'Jef',
  state: 'New york',
  position: 'Forward',
};

console.log(color, name, position); // => red Jef Forward

//2
function generateObj() {
  return {
    color: 'blue',
    who: 'Raghib',
    location: 'Helsinki',
    position: 'Front-End',
  };
}

let { who, location } = generateObj();

console.log('Name:', who, 'Location:', location); // => Name: Raghib Location: Helsinki

let { who: w, location: l } = generateObj();

console.log(w, l); // => Raghib Helsinki

//3
let [first, , , , fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];

console.log(first, fifth); // => red orange

//4
let people = [
  {
    firstName: 'Clinton',
    lastName: 'Ruiz',
    phone: '1-403-985-0449',
    email: 'pharetra@facilisislorem.org',
    address: 'Ap #829-3443 Nec St.',
  },
  {
    firstName: 'Skyler',
    lastName: 'Carroll',
    phone: '1-429-754-5027',
    email: 'Cras.vehicula.alique@diamProin.ca',
    address: 'P.O. Box 171, 1135 Feugiat St.',
  },
  {
    firstName: 'Kylynn',
    lastName: 'Madden',
    phone: '1-637-627-2810',
    email: 'mollis.Duis@ante.co.uk',
    address: '993-6353 Aliquet, Street',
  },
  {
    firstName: 'Chaney',
    lastName: 'Edwards',
    phone: '1-397-181-4501',
    email: 'rutrum@Nullamlobortis.net',
    address: 'P.O. Box 342, 9574 Egestas Street',
  },
];

// Logs the firstName
people.forEach(({ firstName }) =>
  console.log(firstName)
); /* => 
Clinton
Skyler
Kylynn
Chaney
*/

// Log skyler email
let [, Skyler] = people;

let logEmail = ({ email }) => console.log(email);

logEmail(Skyler); // => Cras.vehicula.alique@diamProin.ca
