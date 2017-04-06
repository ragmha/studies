// Destructing Assignment in ES6

//1
var {
  color,
  name,
  state,
  position
} = {
  color: "red",
  name: "Jef",
  state: "New york",
  position: "Forward"
}

console.log(color, name, position);


//2
function generateObj() {
  return {
    color: "blue",
    name: "Raghib",
    state: "Helsinki",
    position: "Front-End"
  }
}

var {name, state} = generateObj();

console.log('Name:', name, 'State:', state);

var {name:n, state:s} = generateObj();

console.log(n, s);


//3
var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];
console.log(first, fifth);



//4
var people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
];

// Logs the firstName
people.forEach(({firstName}) => console.log(firstName));

// Log skyler email
var[,Skyler] = people;

var logEmail = ({email}) => console.log(email);

logEmail(Skyler);
