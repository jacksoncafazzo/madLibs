$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["noun1", "noun2", "verb1", "verb2", "verb3"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
