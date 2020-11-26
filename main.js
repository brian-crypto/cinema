//MENU
var header = document.getElementById('header');
var boton = document.querySelector('.header__btn');

boton.addEventListener('click', function(){
    header.classList.toggle('active');
})

//CAROUSEL

window.addEventListener('load', function(){
    new Glider(document.querySelector('.inicio__carousel__lista'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots : '.inicio__carousel__indicadores',
        arrows: {
          prev: '.inicio__carousel__anterior',
          next: '.inicio__carousel__siguiente'
        }
      });
})

