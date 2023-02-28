$(document).ready(function(){


  $('#darkBtn').click(function(){

    $(".mood").text(function(i, v){
      return v === 'Light' ? 'Dark' : 'Light';
   })

      $(this).toggleClass('text-white');
      $(this).find("i").toggleClass('fas fa-sun fas fa-moon')
      $("body").toggleClass("bg-dark-color");

  });


});