$(function () {
  $("#add").on("click", function () {
    const val = $("input").val();
    if (val !== "") {
      const elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
      $("#mylist").append(elem);
      $("input").val("");
      $(".rem").on("click", function () {
        $(this).parent().remove();
      });
    }
  });
});
