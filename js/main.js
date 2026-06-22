$(function () {
  // add any custom Javascript code below this line

  $("#fact_button").click(function () {
    $("#rail_fact").text(
      "Urban rail systems can reduce car dependence by giving people a fast and predictable way to move through cities."
    );
  });

  $("#rail_image").mouseover(function () {
    $("#rail_image").attr("src", "images/photo6.jpg");
  });

  $("#rail_image").mouseout(function () {
    $("#rail_image").attr("src", "images/photo5.jpg");
  });

  $("#move_train").click(function () {
    $("#train_box").animate(
      {
        left: "200px",
        top: "20px"
      },
      800
    );
  });

  // add any custom Javascript code above this line.
});