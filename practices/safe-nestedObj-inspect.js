// Advanced Reduce: Safe Nested Object Inspection

let luke = {
  name: 'luke skywalker',
  jedi: true,
  parents: { father: { jedi: true }, mother: { jedi: false } },
};

let han = {
  name: 'han solo',
  jedi: false,
  parents: { father: { jedi: false }, mother: { jedi: false } },
};

let anakin = {
  name: 'anakin skywalker',
  jedi: true,
  parents: { mother: { jedi: false } },
};

let characters = [luke, han, anakin];

function fatherWasJedi(character) {
  let path = 'parents.father.jedi';
  return path.split('.').reduce((obj, field) => {
    if (obj) {
      return obj[field];
    }
    return false;
  }, character);
}

characters.forEach(character =>
  console.log(
    character.name + "'s father was a jedi:",
    fatherWasJedi(character)
  )
); /* =>
    luke skywalker's father was a jedi: true
    han solo's father was a jedi: false
    anakin skywalker's father was a jedi: false
*/
