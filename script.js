
//BACK-END / BUSINESS LOGIC
var test = function(i){
  if (i % 3 === 0 && i % 5 === 0){
    return "pingpong";
  }
  else if (i % 3 === 0) {
    return "ping";
  }
  else if (i % 5 === 0) {
    return "pong";
  }
  else {
    return i;
  }
};


var output = function(input) {
  var results = [];
  for (var i = 1; i <= input; i++) {
    results.push(test(i));
  }
return results;
};



//FRONT END LOGIC
$(document).ready(function(){
//enables the refresh-btn to refresh the page.
$(".refresh-btn").on("click", function(){location.reload();});

$("#button").click(function() {
  var userNumber = parseInt($("#input").val());
  var results = output(userNumber);
  var displayResults = $(".displayResults");
  for (var i = 0; i < results.length; i++) {

    displayResults.append('<li>' + results[i] + '</li>');
  }
});
});
