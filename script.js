$(document).ready(function() {
  $("#one form").submit(function(event) {
    var numberInput = $("input#number").val();
    var numberInput = [0, 20];
    $("ul").text(numberInput);


    $("#two").show();

    event.preventDefault();

  });
});
