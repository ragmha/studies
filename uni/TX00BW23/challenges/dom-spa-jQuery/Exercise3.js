// Exercise 3
/*

• [X] Using JavaScript (jQuery) add a new paragraph into the jqbasiclab1.html file
• [X] Define hover event handler in your JavaScript file
• [X] When the user moves mouse above the last div then the content of the newly
added paragraph will be changed to “About to select a link ...”, and when the
user moves mouse outside last div then the text of this paragraph will be
removed
*/

$(document).ready(function(){
      $("#sdiv").hover(function() {
           $("#sdiv a:first").before('<p>About to select a link...</p>');
      },function() {
          $("#sdiv p").remove();
      });
});
