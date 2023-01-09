// function ibg(){

// let ibg=document.querySelectorAll(".ibg");
// for (var i = 0; i < ibg.length; i++) {
// if(ibg[i].querySelector('img')){
// ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// }
// }x
// }

// ibg();

let menu__icon = document.querySelectorAll('.menu__icon');
let menu__body = document.querySelector('.menu__body');
let back = document.querySelector('body');

menu__icon.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      menu__body.classList.toggle('active');
      back.classList.toggle('lock');
   }
});

