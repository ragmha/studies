// Exercise 1
/*

• Download jquery-2.1.1.min.js
• Download jqbasiclab1.html file
• Add missing script tags into the head part of the html


• Using jQuery:
o Add id attribute into the second paragraph
o Remove first paragraph
o Change the background color of the first div to grey and text color to white

*/

$(document).ready(function() {
  // Adds id attribute into the second paragraph
  $('#fdiv p:last').attr('id','sp');

  // Remove first paragraph
  $('#fdiv #fp').remove();

  //Change the background color of the first div to grey and text color to white
  $('#fdiv').css({'background-color': 'grey', 'color':'white'});

});
