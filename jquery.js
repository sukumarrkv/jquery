function renderResult()  {
  //document.getElementByTagname(element name)
  //$("p").css('background-color', 'green');
  //$("div").css('background-color', 'orange');

  //document.getElementById
  //$('#p1').css('font-style', 'italic');
  //jquery requires id to be unique, even though we provided same id for paragraph 3 it didn't change to italic when we clicked the button
  //To solve this we need to use class attribute

  //$('.para').css('font-style', 'italic');

  //If we want to apply changes to para inside div element we can use
  //$('div p').fadeToggle();

  //lets say we want to hide the first  para only and not other paras
  //$('p:first').fadeToggle();

  //If we want to hide items at even posotion
  $('li:even').fadeToggle();
}