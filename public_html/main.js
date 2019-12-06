document.addEventListener("DOMContentLoaded", function(){
    var elements;
    var windowHeight;
    var value = 1
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
    
    function init() {
        elements = document.querySelectorAll('.hidden');
        progress_bar = document.querySelectorAll('.barre_int');
        windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('appear');
            element.classList.remove('hidden');
        }
        }
        for (var i = 0; i < progress_bar.length; i++) {
            var progress = progress_bar[i];
            var positionFromTop2 = progress_bar[i].getBoundingClientRect().top;
        if (positionFromTop2 - windowHeight <= 0) {
            progress.style.width = progress.innerHTML + "vw";
            progress.classList.add('barre_progression');
        }
        }
    }

  
    //J'avais d'autres fonctions qui ne fonctionnaient plus de codepen à ici je les ai donc refaites mais en animation css
    
    
    
    
    
    
    
    
  })