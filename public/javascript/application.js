$(document).ready(function() {
  var meal, danger, radius;

  $('#meal_section button').click(function() { 
    meal = $(this).val();
  });

  $('#danger_section button').click(function() { 
    danger = $(this).val();
  });

  $('#radius_section button').click(function() { 
    radius = $(this).val();
  });

  $('#go').click(function() {
    // $.get('/selection', {"meal": meal, "danger": danger, "radius": radius});
    // window.location = somelocation
    $.ajax({
      url: '/selection',
      method: 'POST',
      data: {
        meal: meal,
        dnager: danger,
        radius: radius
      }
    }).done(function(dataFromServer) {
      name = dataFromServer[0].name
      // $( "#result_section" ).load(dataFromServer.name)
      // console.log('return from sinatra', dataFromServer)
      $( "#result_section" ).append( "<p>" + name + "</p>" );
      $( "#result_section" ).append( "<p>" + rating + "</p>" );
      
    }).error(function(errorResponseFromServer) {
      console.log(errorResponseFromServer)
    })
  });

});