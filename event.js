/*
$('#btn').click(function1);
function function1() {
  $('.event-div').css('background-color', 'orange');
}*/

/*
//another way of writing above code
$('#btn').click(function() {
  $('.event-div').css('background-color', 'orange');
});*/

/*
//another way of writing above code
$('#btn').click(() => {
  $('.event-div').css('background-color', 'orange');
});*/

//It is always good practice to use ready event which loads the all the html first
//Without this if html is not loaded and a button is clicked it will lead to issues hence always use ready
//Write all the code inside the ready event as shown below
$(document).ready(() => {
  $('#btn').click(() => {
    $('.event-div').css('background-color', 'orange');
  });
});