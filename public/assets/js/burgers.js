$(document).ready(function() {

  $("#addBurger").on("click", function(event) {
    event.preventDefault();
    
    var newBurger = {
      name: $("#burgerInput").val().trim()
    };

    $.ajax("/api/addburger", {
      type: "POST",
      data: newBurger
    }).then(
      function(id) {
        location.reload();
      }); 
    });  

  $(".devourButton").on("click", function(event) {
    var id = $(this).attr("data-burgerid");

    $.ajax("/api/devourburger/" + id, {
      type: "PUT",
    }).then(
      function(id) {
        location.reload();
      }
    );
  });     
});
