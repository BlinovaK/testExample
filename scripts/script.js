$(document).ready(function() {

  var $animatedTextsLeft = $('.animatedLeft');

  $animatedTextsLeft.each(function(index) {
    var $text = $(this);
    var delay = index * 200;
    $text.delay(delay).animate({
      left: 0,
      opacity: 1
    }, 1000);
  });

  var $animatedTextsRight = $('.animatedRight');
  $animatedTextsRight.each(function(index){
      var $text = $(this);
      var delay = index * 200;
      $text.delay(delay).animate({
        right: 0,
        opacity: 1
      }, 1000)
  });

  var $animatedTextsRight = $('.animatedRightPhoto');
  $animatedTextsRight.each(function(index){
      var $text = $(this);
      var delay = index * 200;
      $text.delay(delay).animate({
        right: -150,
        opacity: 1
      }, 1000)
  });

  var $scrollingImage = $('#scrollingImage');

  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $scrollingImage.css('transform', 'translateX(' + scrollPosition + 'px)');
  });

  function animateArrow() {
    $('.arrow-down').animate({ paddingTop: '30px' }, 500, 'swing').animate({ paddingTop: '0px' }, 500, 'swing');
  }
  setInterval(animateArrow, 2000);

    let range = document.querySelector('input[type="range"].slider-progress')
    range.style.setProperty('--value', range.value);
    range.style.setProperty('--min', range.min);
    range.style.setProperty('--max', range.max);
    range.addEventListener('input', () => range.style.setProperty('--value', range.value));
    let textRange = document.querySelector('#square-value')
    range.addEventListener('input', () => textRange.innerHTML = range.value);
});


