var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*var checkBox = $('#check');
var sky = $('.sky');
var stars = $('.stars-1, .stars-2, .stars-3, .stars-4')

checkBox.change(function(){
    sky.toggleClass('sky__night');
    stars.toggleClass('stars__night');
});
