$(document).ready(function() {

  // Page loads, delay to show logo, scrolls to first section.
  $("body").delay(1000).animate({ scrollTop: 1000 }, "slow");

  var d_food_type, d_danger_type, d_distance;

  $("body").on("click", ".food_type", function(event) {
    d_food_type = $(this).attr('d-food-type');

    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#danger_section").offset().top
    }, 1000);
  });

  $("body").on("click", ".danger_type", function(event) {
    d_danger_type = $(this).attr('d-danger-type');

    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#radius_section").offset().top
    }, 1000);
  });

  $("body").on("click", ".distance", function(event) {
    d_distance = $(this).attr('d-distance-type');

    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#go_section").offset().top
    }, 1000);
  });

  $("body").on("click", ".go", function(event) {

    $('.distance').attr('value', d_distance);
    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#result_section").offset().top
    }, 1000);
  });

  $('#go').click(function() {
    $.ajax({
      url: '/selection',
      method: 'POST',
      data: {
        meal: d_food_type,
        dnager: d_danger_type,
        radius: d_distance
      }
    }).done(function(dataFromServer) {
      name = dataFromServer[0].name
      address = dataFromServer[0].vicinity
      rating = dataFromServer[0].rating

      
      $( "#result_section" ).append( "<h1>" + name + "</h1>" );
      $( "#result_section" ).append( "<h1>" + address + "</h1>" );
      $( "#result_section" ).append( "<h1>" + rating + "</h1>" );
    }).error(function(errorResponseFromServer) {
      console.log(errorResponseFromServer)
    })
  });

});