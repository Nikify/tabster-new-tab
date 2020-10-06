window.addEventListener('load', function () { 
    init();
});

  function init(){
    document.getElementById("bg_img").src = "resources/images/" + getRandomInt(14) + ".jpg";
    setTimeout(function(){
      document.getElementById("bg_img").style.opacity = 0.3;
      document.getElementById("gradient").style.opacity = 1;
      document.getElementById("icon_container").style.top = "calc(50% - (200px/2))";
      document.getElementById("icon_container").style.opacity = 1;
      document.getElementById("logo").style.opacity = 1;
    }, 200);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }