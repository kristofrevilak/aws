$(document).ready(function () {
  $(".controls button").click((e) => {
    if (!$(e.target).hasClass("active")) {
      let parent = $(e.target).parent().parent().attr("class");
      let parentActive = "." + parent + " .active";
      $(parentActive).removeClass("active");
      let pressedId = e.target.id;
      let buttonId = "#" + pressedId;
      let panoramaId = "#i" + pressedId.substring(1);
      $(panoramaId).addClass("active");
      $(buttonId).addClass("active");
    }
  });
  //   $("#b-l-2").click(() => {
  //     $("#i-l-2").show();
  //     $("#i-l-1").hide();
  //   });
  //   $("#b-r-1").click(() => {
  //     $("#i-r-1").show();
  //     $("#i-r-2").hide();
  //   });
  //   $("#b-r-2").click(() => {
  //     $("#i-r-2").show();
  //     $("#i-r-1").hide();
  //   });
});
