$(document).ready(function(){
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#hd').outerHeight();
  $(window).scroll(function(event){
    didScroll = true;
  });
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
     // Make sure they scroll more than delta
     if(Math.abs(lastScrollTop - st) <= delta)
     return;
     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight){
       // Scroll Down
       $('#hd').removeClass('nav-down').addClass('nav-up'); } else {
         // Scroll Up
         if(st + $(window).height() < $(document).height()) {
            $('#hd').removeClass('nav-up').addClass('nav-down');
          }
        }
        lastScrollTop = st;
      }

      var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})


});
