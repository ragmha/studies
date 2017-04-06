// Exercise 2
/*
• Using javascript modify the DOM

1. Create an info array with size of 4 elements

2. When the user writes his/her name
o Change the background colour of the selected field
o After user leaves the input field store first name into array’s first element
and last name into the second element

3. When the user selects gender to store selection into array’s third element

4. If the array contains values in the first three elements, then
o add new select element into the form – with this selection find out how did
user arrive to Metropolia

5. When the user selects the means of transportation
o store selection into array’s fourth element
o Check if all array’s elements have value then display array’s content in
document’s paragraph (id=”here”)
*/

$(document).ready(function() {
  var info = new Array(4);
  let selected = false;
  $("#ename")
    .focus(function() {
      $(this).css("background-color", "#D3D3D3");
    })
    .blur(function() {
      $(this).css("background-color", "#FFFFFF");
      info[0] = $(this).val();
    });

  $("#lname")
    .focus(function() {
      $(this).css("background-color", "#D3D3D3");
    })
    .blur(function() {
      $(this).css("background-color", "#FFFFFF");
      info[1] = $(this).val();
    });

  $("#selSex").change(function() {
    info[2] = $(this).val();

    const arrival = `<br>
      <label>How did you arrive?</label>
      <select id="selTransport">
      <option value="by bus" selected="selected">By bus</option>
      <option value="by train">By train</option>
      </select>`;

    if (
      $("#ename").val() && $("#lname").val() && $("#selSex").val() && !selected
    ) {
      selected = true;
      $("form").append(arrival);

      $("#selTransport").change(function() {
        info[3] = $(this).val();
        $("#here").text(info);
      });
    }
  });
});
