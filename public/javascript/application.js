$(document).ready(function() {
  var meal, danger, radius;

  $('.meal_section button').click(function() { 
    meal = $(this).val();
  });

  $('.danger_section button').click(function() { 
    danger = $(this).val();
  });

  $('.radius_section button').click(function() { 
    radius = $(this).val();
  });

  $('#go').click(function() {
    // $.get('/selection', {"meal": meal, "danger": danger, "radius": radius});
    // window.location = somelocation
    $.ajax({
      url: '/selection',
      method: 'POST',
      data: JSON.stringify({
        meal: meal,
        dnager: danger,
        radius: radius
      })
    }).done(function(dataFromServer) {
      // put what you want to do to page after response here
      // dataFromServer.name
      // $( "#result_section" ).load(dataFromServer.name)
      console.log('return from sinatra', dataFromServer)
    }).error(function(errorResponseFromServer) {
      console.log(errorResponseFromServer)
    })
  });

});