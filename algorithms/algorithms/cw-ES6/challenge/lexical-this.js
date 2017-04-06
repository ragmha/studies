/*
Lexical this

Complete the Person object, by completing the FillFriends function to fill
the _friends Array for the person object.


- Return the person object with the Name, Friends and FillFriends function filled
out which will fill the input into the Friends property.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends.push(...f);
    }
  }
  return person;
}

// Test
var people = [['bob','john'],['bob','john','dave'],[],['bob','john','dave','matt','alex']]

for(var i=0;i<4;i++){
  var person = Person();
  person.fillFriends(people[i])
  Test.assertSimilar(person._friends, people[i])
}
