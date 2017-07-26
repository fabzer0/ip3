$(document).ready(function() {
  $("#one form").submit(function(event) {
    var numberInput = $("input#number").val();

    $("ul").text(numberInput);

    $("#two").show();

    event.preventDefault();
  });
});
