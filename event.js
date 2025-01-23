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
  //click event
  $('#btn').click(() => {
    $('.event-div').css('background-color', 'orange');
  });

  //Some buttons work on double click. To do some actions after double click just replace click to dblclick in above code

  
  //moveenter is the event called when we move our mouse over a element lets say image
  /*
  $('#img1').mouseenter(() => {
    $('#img1').css('width', '500px');
  });
  //mouseleave is the event called when we move our mouse out of a element lets say image
  $('#img1').mouseleave(() => {
    $('#img1').css('width', '250px');
  });*/
  //Instead of both above we can use use hover method
  
  $('#img1').hover(fn1, fn2);

  function fn1() {
    $('#img1').css('width', '500px');
  }

  function fn2() {
    $('#img1').css('width', '200px');
  }
});