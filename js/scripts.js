$(document).ready(function() {
  $("form#intro").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    if (name) {
      $("#quiz").show();
    } else {
      alert("Please enter your name!");
    }
  });

  $("form").submit(function() { 
  
    event.preventDefault();
    const height = $("input:radio[name=height]:checked").val();

    const date = $("input:radio[name=date]:checked").val();

    const food = $("input:radio[name=food]:checked").val();

    

    if (height === "bean" && food === "tuna" || height === "bean" && food ==="licorice" || height === "bean" && food ==="brocolli") {
      $("#quizResultGoblin").hide();
      $("#quizResultSponge").hide();
      $("#quizResultBean").show();

    } else if (height === "spongeBob" && food === "brocolli" || height === "spongeBob" && food ==="tuna" || height === "spongeBob" && food === "licorice") {
      $("#quizResultBean").hide();
      $("#quizResultGoblin").hide();
      $("#quizResultSponge").show();

    } else {
      $("#quizResultBean").hide();
      $("quizResultSponge").hide();
      $("#quizResultGoblin").show();
    }
  });
    
});
