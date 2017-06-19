/*
Description:

String Templates - Bug Fixing #5

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use
the new String Template feature, Help Timmy with his string template so it works
as he expects!

function buildString(...template){
  return `I like #{template.join(',')}`;
}
*/

function buildString(...template) {
  return `I like ${template.join(', ')}!`
}

// Test

buildString('Cheese','Milk','Chocolate'); // => 'I like Cheese, Milk, Chocolate!'
buildString('Cheese','Milk'); // =>  'I like Cheese, Milk!'
buildString('Chocolate'); // => 'I like Chocolate!'
