$(document).ready(function() {

// Page loads, delay to show logo, scrolls to first section.

$("html, body").delay(1000).animate({scrollTop: $('#page2').offset().top }, 1000);

var $obj = {
  "food_type": "breakfast"

};

$("body").on("click", ".food_type", function(event) {
  // console.log("Clicked the food-type button!");
  var d_food_type = $(this).attr('d-food-type');
  // console.log(d_food_type);
  $('.food_type').attr('value', d_food_type);
  $('html, body').animate({                   //smooth scrollin bud.
    scrollTop: $("#page3").offset().top
  }, 1000);
  //obj.food_type = ;
  // $('#food_type').val(d_food_type);
  console.log($('#food_type').val());
});

$("body").on("click", ".danger_type", function(event) {
  console.log("Clicked the danger-type button!");
  var d_danger_type = $(this).attr('d-danger-type');

  console.log(d_danger_type);

  $('.danger_type').attr('value', d_danger_type);
  $('html, body').animate({                   //smooth scrollin bud.
    scrollTop: $("#page4").offset().top
  }, 1000);
  //obj.food_type = ;
  // $('#food_type').val(d_food_type);
  console.log($('#danger_type').val());
});

$("body").on("click", ".distance", function(event) {
  console.log("Clicked the distance button!");
  var d_distance = $(this).attr('d-distance-type');
  console.log(d_distance);

  $('.distance').attr('value', d_distance);
  $('html, body').animate({                   //smooth scrollin bud.
    scrollTop: $("#page5").offset().top
  }, 1000);
  //obj.food_type = ;
  // $('#food_type').val(d_food_type);
  console.log($('#distance').val());
});
 
$("body").on("click", ".another_dive", function(event) {
  console.log("Clicked the another dive button!");
  var d_distance = $(this).attr('d-another-dive-type');
  console.log(d_another_);

  $('.distance').attr('value', d_distance);
  $('html, body').animate({                   //smooth scrollin bud.
    scrollTop: $("#page5").offset().top
  }, 1000);
  //obj.food_type = ;
  // $('#food_type').val(d_food_type);
  console.log($('#distance').val());
});




// $("body").on("click", "#submitttt", function(event) {
//   $.getJSON("/test"[, $obj][, function]( data ) {
//     console.log("got data!");
//     // debugger;
//   });
// });

// $("#food_type").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#myDiv").offset().top
//     }, 2000);
// });

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});