var toggleButton =document.getElementById('menu-toggle');


$("#menu-toggle").click(function(e) {
  e.preventDefault();
  
  if(toggleButton.text == '<-'){
    $('#menu-toggle').text('->');
  }else{
    $('#menu-toggle').text('<-');
  }
  

  $("#wrapper").toggleClass("toggled");
});


