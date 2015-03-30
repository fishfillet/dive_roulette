$(document).ready(function() {


  // Page loads, delay to show logo, scrolls to first section.
  $("html, body").delay(1000).animate({scrollTop: $('#page2').offset().top }, 1000);

  var d_food_type, d_danger_type, d_distance, lat, lng;

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

  $("body").on("click", ".another_dive", function(event) {
    d_danger_type = $(this).attr('d-another-dive-type');

    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#page2").offset().top
    }, 1000);
  });

  $('#go').click(function() {
    postParams = {
      meal: d_food_type,
      danger: d_danger_type,
      radius: d_distance
    };
    renderMap(postParams);
  });

  var map;

  function drawCenteredMap(dataFromServer) {
    console.log("datafromservre", dataFromServer)
    name = dataFromServer.name
    address = dataFromServer.vicinity
    lat = dataFromServer.lat
    lng = dataFromServer.lng

    $( "#restaurant_name" ).replaceWith( '<h2 id="restaurant_name">' + name + "</h2>" );
    $( "#restaurant_address" ).replaceWith( '<h2 id="restaurant_address">' + address + "</h2>" );

  // map stuff starts
    console.log("LatLng", lat, lng);
    var centerPoint = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 15,
      center: centerPoint
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var marker = new google.maps.Marker({
      position: centerPoint,
      map: map,
      animation: google.maps.Animation.DROP
    });

  }
  // test for map ------------------------------

  function renderMap(postParams) {
    $.ajax({
      url: '/selection',
      method: 'POST',
      data: postParams
    })
    .done(drawCenteredMap)
    .error(function(errorResponseFromServer) {
      console.log(errorResponseFromServer)
    });
  }

  // google.maps.event.addDomListener(window, 'load', renderMap);


  $("body").on("click", ".danger_type", function(event) {
    d_danger_type = $(this).attr('d-danger-type');

    $('html, body').animate({                   //smooth scrollin bud.
      scrollTop: $("#radius_section").offset().top
    }, 1000);
  });

  $('#sent_address_button').click(function() {
    var form_data = $(this).closest("form").serialize();
    $.post('/sent_address', {"phone_number": form_data, "address": address});
    // window.location = somelocation
  });

});