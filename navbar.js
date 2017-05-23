$(document).ready(function() {
  var navbarStartingPosition = 0;
  var currentPosition = $('nav').offset().top;
  if (currentPosition !== navbarStartingPosition) {
    $('nav').css({
      'transition' : '0.2s ease-in',
      'background-color' : 'rgba(255, 255, 255, 0.9)',
      'padding-top' : '3px',
      'padding-bottom' : '3px'
    });
  }
  $(document).scroll(function() {
    var currentPosition = $('nav').offset().top;
    if (currentPosition !== navbarStartingPosition) {
      $('nav').css({
        'transition' : '0.2s ease-in',
        'background-color' : 'rgba(255, 255, 255, 0.9)',
        'padding-top' : '3px',
        'padding-bottom' : '3px'
      });
    } else {
      $('nav').css({
        'background-color': 'rgba(0, 0, 0, 0)',
        'padding-top' : '15px',
        'padding-bottom' : '15px',
      });
    }
  });
});
