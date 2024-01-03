const coin = document.querySelector('#coin');
const film = document.querySelector('#film');


film.addEventListener('mouseover',() => {
   coin.style = 'transform: rotateY(180deg); transition: all 0.5s ease;'; 
});

film.addEventListener('mouseout',() => {
    coin.style.removeProperty('transform');
    coin.style.removeProperty('transition');
 });