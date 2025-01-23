$(document).ready(() => {
  $('#hide-button').click(() => {
    //$('#img1').hide();
    //We can pass time as argument to above hide method. Same goes for below show and toggle methods
    $('#img1').hide(2000);
  });

  $('#show-button').click(() => {
    $('#img1').show();
  });

  $('#toggle-button').click(() => {
    $('#img1').toggle();
  });
})