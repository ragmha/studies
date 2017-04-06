// Exercise 2
/*

• [x] Add a button into the jqbasiclab1.html file
• [x] Define click event handler in your JavaScript file
• [x] When the user clicks button then a new paragraph (id = ‘tp’) with the text
‘Hello user’ will be added into your HTML-document as a last paragraph inside
the first div
*/

$(document).ready(function(){

  $("button").click(function(){
    $("#fdiv p:last").after('<p id="tp">Hello user</p>');
  });

});
