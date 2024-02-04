$(document).ready(function() {

  var mobileMenu = document.querySelector('.wrapper');
  var mobileMenuInput = document.querySelector('.m-menu__checkbox');
  mobileMenuInput.addEventListener('input', () => {if(mobileMenuInput.checked){
    mobileMenu.style.setProperty('width','100vw')
    mobileMenu.style.setProperty('height','100vh')
  }else{
    mobileMenu.style.setProperty('width','auto')
    mobileMenu.style.setProperty('height','auto')
  }

})

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

    var range = document.querySelector('input[type="range"].slider-progress')
    range.style.setProperty('--value', range.value);
    range.style.setProperty('--min', range.min);
    range.style.setProperty('--max', range.max);
    range.addEventListener('input', () => range.style.setProperty('--value', range.value));
    var textRange = document.querySelector('#square-value')
    range.addEventListener('input', () => textRange.innerHTML = range.value);


});

function showMenu(){
  var menu = document.querySelector('.link_close_menu')
  var button = document.querySelector('.link_close-btn_img')
  menu.style.setProperty('display', 'flex')
  button.style.setProperty('display', 'initial')
}

function closeMenu(){
  var menu = document.querySelector('.link_close_menu')
  var button = document.querySelector('.link_close-btn_img')
  menu.style.setProperty('display', 'none')
  button.style.setProperty('display', 'none')
}
