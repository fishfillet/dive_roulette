$(document).ready(function() {


  // Page loads, delay to show logo, scrolls to first section.
  $("html, body").delay(2000).animate({scrollTop: $('#page2').offset().top }, 2000);

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

    function renderMap(postParams) {
    $.ajax({
      url: '/selection',
      method: 'POST',
      data: postParams
    })
    .done(drawCenteredMap);
  }

  var map;
  var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  function drawCenteredMap(dataFromServer) {
    console.log("datafromserver", dataFromServer)
    name = dataFromServer.name
    address = dataFromServer.vicinity
    lat = dataFromServer.lat
    lng = dataFromServer.lng

    $( "#restaurant_name" ).replaceWith( '<h1 id="restaurant_name">' + name + "</h1>" );
    $( "#restaurant_address" ).replaceWith( '<h1 id="restaurant_address">' + address + "</h1>" );
    // $( "h1.name" ).replaceWith( "<h1 class="name">" + name + "</h1>" );
    // $( "h1.address" ).replaceWith( "<h1 class="address">" + address + "</h1>" );

  // map stuff starts
    console.log("LatLng", lat, lng);
    var centerPoint = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 15,
      center: centerPoint,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      
    var marker = new google.maps.Marker({
    position: centerPoint,
    map: map,
    url: "https://www.google.ca/maps/search/" + name,
    animation: google.maps.Animation.DROP
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    google.maps.event.addListener(marker, 'click', function() { 
    window.open(marker.url, '_blank'); 
    });
    
  }//end of drawCenteredMap
  // test for map ------------------------------



});