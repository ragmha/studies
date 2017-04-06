// Exercise 1
/*
• Using javascript modify the DOM

1. when user clicks the button:
o Add the following text into content of first header: ”select your favourite
colour among the colours ”
o Change the src attribute in each of the img-tags to point one of the image-files
o Add the following text into content of second header: ” your favourite colours
in order”

2. add click event handler to each image

3. when user clicks a color:
o Clicked color (=image) will be hidden
o Selected colour will be added as a list item into unordered list (ul-tag)
*/

$(document).ready(function(){
  $('button').click(function(){
    $('#advice').text("select your favourite colour among the colours");

    $('#img1').attr('src','red.jpg')
      .click(function(){
        $('#img1').hide();
        $('#selection ul').append('<li>red</li>');
    });

    $('#img2').attr('src','blue.jpg')
      .click(function(){
        $('#img2').hide();
        $('#selection ul').append('<li>blue</li>');
    });

    $('#img3').attr('src','yellow.jpg')
      .click(function(){
        $('#img3').hide();
        $('#selection ul').append('<li>yellow</li>');
    });

    $('#sel').text("your favourite colours in order");
  });

});
