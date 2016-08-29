$(document).ready(function() {
    // run function on initial page load

    menu();
    randomizeList();
    // scrollUp();
    

    // run function on resize of the window
    $(window).resize();    

    // run function on scroll
    $(window).scroll();
});

  function menu () {
    $('#menu-open').click(function () {
      var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      $('#modal-menu').addClass("hide");
      $('header').addClass("blur");
      $('#main-content').addClass("blur");
      $('.single-col').addClass("blur");
      $('footer').addClass("blur");
      var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
      $('#menu-close').click(function () {
        $('#modal-menu').removeClass("hide");
        $('header').removeClass("blur");
        $('#main-content').removeClass("blur");
        $('.single-col').removeClass("blur");
        $('footer').removeClass("blur");
        // un-lock scroll position
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
      });
    });
  }
function randomizeList() {
  var number = 1 + Math.floor(Math.random() * 2);
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var letterpicker = Math.floor(Math.random() * letters.length)
  var size = (200 + Math.floor(Math.random() * 150)) + 'vh';
  var height = Math.random();
  console.log(size);
  console.log(number);
  console.log(letterpicker);
  console.log(letters[letterpicker]);
  if(number == 1) {
    $('.cropped').addClass('sans');
    $('.cropped').text(letters[letterpicker]);
    $('.cropped').css("font-size", size);
    $('.cropped').css("line-height", height);
  }
  else {
    $('.cropped').addClass('serif'); 
    $('.cropped').text(letters[letterpicker]);
    $('.cropped').css("font-size", size);
    $('.cropped').css("line-height", height);
  }

}
