$(document).ready(function() {


// Page loads, delay to show logo, scrolls to first section.
$("html, body").delay(1000).animate({scrollTop: $('#page2').offset().top }, 1000);

  var d_food_type, d_danger_type, d_distance, lat, lng;

// <<<<<<< HEAD
// };

// $("body").on("click", ".food_type", function(event) {
//   // console.log("Clicked the food-type button!");
//   var d_food_type = $(this).attr('d-food-type');
//   // console.log(d_food_type);
//   $('.food_type').attr('value', d_food_type);
//   $('html, body').animate({                   //smooth scrollin bud.
//     scrollTop: $("#page3").offset().top
//   }, 1000);
//   //obj.food_type = ;
//   // $('#food_type').val(d_food_type);
//   console.log($('#food_type').val());
// });

// $("body").on("click", ".danger_type", function(event) {
//   console.log("Clicked the danger-type button!");
//   var d_danger_type = $(this).attr('d-danger-type');

//   console.log(d_danger_type);

//   $('.danger_type').attr('value', d_danger_type);
//   $('html, body').animate({                   //smooth scrollin bud.
//     scrollTop: $("#page4").offset().top
//   }, 1000);
//   //obj.food_type = ;
//   // $('#food_type').val(d_food_type);
//   console.log($('#danger_type').val());
// });

// $("body").on("click", ".distance", function(event) {
//   console.log("Clicked the distance button!");
//   var d_distance = $(this).attr('d-distance-type');
//   console.log(d_distance);

//   $('.distance').attr('value', d_distance);
//   $('html, body').animate({                   //smooth scrollin bud.
//     scrollTop: $("#page5").offset().top
//   }, 1000);
//   //obj.food_type = ;
//   // $('#food_type').val(d_food_type);
//   console.log($('#distance').val());
// });
// // $("body").on("click", "#submitttt", function(event) {
// //   $.getJSON("/test"[, $obj][, function]( data ) {
// //     console.log("got data!");
// //     // debugger;
// //   });
// // });

// // $("#food_type").click(function() {
// //     $('html, body').animate({
// //         scrollTop: $("#myDiv").offset().top
// //     }, 2000);
// // });

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// =======
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
    postParams = {
      meal: d_food_type,
      dnager: d_danger_type,
      radius: d_distance
    };
    renderMap(postParams);
  });

var map;

function drawCenteredMap(dataFromServer) {

  name = dataFromServer[0].name
  address = dataFromServer[0].vicinity
  lat = dataFromServer[0].lat
  lng = dataFromServer[0].lng

  $( "#result_section" ).append( "<h1>" + name + "</h1>" );
  $( "#result_section" ).append( "<h1>" + address + "</h1>" );

  console.log("LatLng", lat, lng);
  var centerPoint = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    zoom: 15,
    center: centerPoint
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
// test for map ------------------------------

function renderMap(postParams) {
  console.log("POSTing", postParams);
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

function initializeMap() {
  defaultParams = {
      meal: "breakfast",
      dnager: "safe",
      radius: 10000
    };
  renderMap(postParams);
}
google.maps.event.addDomListener(window, 'load', initializeMap);
 
// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
//       '&signed_in=true&callback=initialize';
//   document.body.appendChild(script);
// }

// window.onload = loadScript;


// end of code
});