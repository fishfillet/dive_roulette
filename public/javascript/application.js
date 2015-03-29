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

  var $obj = {
    "food_type": "breakfast"

  };


  $("body").on("click", ".food_type", function(event) {
      console.log("Clicked the food-type button!");

    var d_food_type = $(this).attr('d-food-type');
    console.log(d_food_type);

    $('#food_type').attr('value', d_food_type);
    //obj.food_type = ;
    // $('#food_type').val(d_food_type);


    console.log($('#food_type').val());
  });


  $("body").on("click", "#submitttt", function(event) {
    $.getJSON("/test"[, $obj][, function]( data ) {
      console.log("got data!");

    });
  });

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});






