// 1 - 4
var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };

  setTimeout(blab, 2000);

  return blab;
};

var calling = nonsense('LadyGaga');

var blabLater = calling();

var blabAgainLater = calling();

console.log(blabLater);

console.log(blabAgainLater);

// 5
var lastNameTrier = function(firstName) {
  //does stuff
  var innerFunction = function(lastName) {
    //does stuff
    return firstName + ' ' + lastName;
  };

  //maybe returns something here
  return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer');
console.log(firstNameFarmer('Brown'));

console.log(firstNameFarmer('Jane'));
console.log(firstNameFarmer('Lynne'));

//6
var storyWriter = function() {
  var story = '';

  return {
    addWords: function(words) {
      story += words + ' ';
      return story.trim();
    },
    erase: function() {
      story = '';
    }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
// 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.');

//'There was once a lonely cow. It saw a friendly face.'
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
// 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.');
//'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
