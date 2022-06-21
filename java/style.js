var logo = document.querySelector('.logomenu1');
var menu = document.querySelector('.menu');

// creation de l'evenement de click sous-forme d'une fonction

 logo.addEventListener('click', function()
 {
     menu.classList.toggle('showmenu')
 });

//Animation du boutton play pour pouvoir jouer de la musique


 var MaMusique = document.getElementById("MaMusique");
 var btnplay = document.getElementById("btnplay");

 
 btnplay.onclick = function(){
    if (MaMusique.paused) {
        MaMusique.play();

        btnplay.src = "media/imgs/images/pause.png"
    } else {
        MaMusique.pause();
        btnplay.src = "media/imgs/images/play.png"
    }
}