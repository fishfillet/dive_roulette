$(document).ready(function() {

var $obj = {
  "food_type": "breakfast"

};

$("body").on("click", ".food_type", function(event) {
  console.log("Clicked the food-type button!");
  var d_food_type = $(this).attr('d-food-type');
  console.log(d_food_type);

  $('.food_type').attr('value', d_food_type);
  $('html, body').animate({                   //smooth scrollin bud.
    scrollTop: $("#page3").offset().top
  }, 2000);
  //obj.food_type = ;
  // $('#food_type').val(d_food_type);
  console.log($('#food_type').val());
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