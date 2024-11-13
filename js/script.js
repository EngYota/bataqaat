$(document).ready(function() {
  var GC = document.querySelector(".Greeting-cards");
  var link = document.querySelectorAll(".pageselector > a");
  var selectLink = 0;
  
  function leInitWrapper() {
    var bgHeight = window.innerHeight;
    
    if (window.innerWidth < 1024) {
      for (var i = 0; i < GC.children.length; i++) {
        GC.children[i].style.backgroundSize = "auto";
      }
    }
    else {
      for (var i = 0; i < GC.children.length; i++) {
        GC.children[i].style.backgroundSize = "100%";
      }
    }
  
    for (var i = 0; i < link.length; i++) {
      link[i].setAttribute("page-value", i.toString());
      link[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        selectLink = parseInt(this.getAttribute("page-value"))
        GC.style.top = (selectLink * bgHeight * -1) + "px";
        for (var j = 0; j < link.length; j++) {
          link[j].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  }
  leInitWrapper();
  
  window.addEventListener("resize", function() {
    leInitWrapper();
  });

});



