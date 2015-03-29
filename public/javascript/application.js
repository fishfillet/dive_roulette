$(document).ready(function() {

  // Page loads, delay to show logo, scrolls to first section.
  $("body").delay(1000).animate({ scrollTop: 1000 }, "slow");

  var $obj = {
    "food_type": "breakfast"
  };

  $("body").on("click", ".food_type", function(event) {
    var d_food_type = $(this).attr('d-food-type');

    $('.food_type').attr('value', d_food_type);
    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#danger_section").offset().top
    }, 1000);
    //obj.food_type = ;
    // $('#food_type').val(d_food_type);
  });

  $("body").on("click", ".danger_type", function(event) {
    var d_danger_type = $(this).attr('d-danger-type');

    $('.danger_type').attr('value', d_danger_type);
    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#radius_section").offset().top
    }, 1000);
    //obj.food_type = ;
    // $('#food_type').val(d_food_type);
  });

  $("body").on("click", ".distance", function(event) {
    var d_distance = $(this).attr('d-distance');

    $('.distance').attr('value', d_distance);
    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#go_section").offset().top
    }, 1000);
    //obj.food_type = ;
    // $('#food_type').val(d_food_type);
  });

  $("body").on("click", ".go", function(event) {
    var d_distance = $(this).attr('d-distance');

    $('.distance').attr('value', d_distance);
    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#result_section").offset().top
    }, 1000);
    //obj.food_type = ;
    // $('#food_type').val(d_food_type);
  });

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
      address = dataFromServer[0].address
      // name = "it works"
      // $( "#result_section" ).load(dataFromServer.name)
      // console.log('return from sinatra', dataFromServer)
      $( "#result_section" ).append( "<h1>" + name + "</h1>" );
      $( "#result_section" ).append( "<h1>" + address + "</h1>" );
    }).error(function(errorResponseFromServer) {
      console.log(errorResponseFromServer)
    })
  });

});