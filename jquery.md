
$('.navTab').append('<span class="marker"></span>');
$('.active').each(function()
 {
    var width = $(this).width();
    $(this).parent().find('.marker').css({"width" : width });
});


$('.navTab a').click(function(){
    var navTap = $(this).closest('.navTab');
    var mrkWidth = $(this).parent('li').width();
    var nx = $(".navTab").offset();
    var lx = $(this).parent('li').offset();
    var left = lx.left - nx.left;
   $('.navTab li').removeClass('active');
   $(this).parent().addClass('active');
   navTap.find('.marker').css({"width" : mrkWidth , "left" : left});
 });
//Ripple Animation
$(".btn , .navTab a").click(function(e) {

  // Remove olds ones
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
