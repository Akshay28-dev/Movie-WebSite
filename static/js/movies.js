//Scrolling the cast
$('#right-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "+=300px"
  }, "slow");
});

  $('#left-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "-=300px"
  }, "slow");
});