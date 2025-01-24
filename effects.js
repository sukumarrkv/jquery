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

  $('#fade-in-button').click(() => {
    $('#img1').fadeIn(2000);
  });

  $('#fade-out-button').click(() => {
    $('#img1').fadeOut(2000);
  });
  
  $('#fade-toggle-button').click(() => {
    $('#img1').fadeToggle();
  });

  //The fade effects have same functionality as hide/show effect just the animation changes
  //Similarly we have slide up, slide down and slide toggle effects which makes the image slide up/down/toggle

  $('#slide-up-button').click(() => {
    $('#img1').slideUp(2000);
  });

  $('#slide-down-button').click(() => {
    $('#img1').slideDown(2000);
  });
  
  $('#slide-toggle-button').click(() => {
    $('#img1').slideToggle();
  });

  //We have one more function called stop which will stop the effects inbetween.
  $('#stop-effect-button').click(() => {
    $('#img1').stop();
  });

  //Animate
  $('#animate-button').click(() => {
    //animate method accepts three parameters, first one css styles to be applied, time, callback function
    //Instead of time we can pass 'slow'/'fast'
    $('#img2').animate({
      width:'500px',
      opacity:0.5
    }, 2000);
  });

})