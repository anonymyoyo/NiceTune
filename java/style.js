var logo = document.querySelector('.logomenu1');
var menu = document.querySelector('.menu');

// creation de l'evenement de click sous-forme d'une fonction

logo.addEventListener('click', function()
{
    menu.classList.toggle('showmenu')
});