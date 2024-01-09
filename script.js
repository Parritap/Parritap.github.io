const coin = document.querySelector('#coin');
const film = document.querySelector('#film');


film.addEventListener('mouseover',() => {
   coin.style = 'transform: rotateY(180deg); transition: all 0.5s ease;'; 
});

film.addEventListener('mouseout',() => {
    coin.style.removeProperty('transform');
    coin.style.removeProperty('transition');
 });

// The following lines are for adding the blur effect whenever the user scrolls the page down
// credits to FireShip. 

const hiddenSubject = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.add('visible');
      } else {
         entry.target.classList.remove('visible');
      }
   });
});

const hiddenObjects = document.querySelectorAll('.hidden');
hiddenObjects.forEach (element => hiddenSubject.observe(element) )


// The following is for making the cursor divs to follow the pointer (which is invisible)
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector ("[data-cursor-outline]");

window.addEventListener( "mousemove", (e) => {
   const posX = e.clientX;
   const posY = e.clientY;

   cursorDot.style.left = `${posX}px`;
   cursorDot.style.top = `${posY}px`;

   cursorOutline.animate({
         left:  `${posX}px`,
         top:  `${posY}px`
      },{
         duration:150, fill: "forwards"
      });
});


// Chaging the smaling face content on hover: 

const face = document.querySelector("#face");
console.log(face);

face.addEventListener(("mouseover"), ()=> {
      face.innerHTML = ";)";
});

face.addEventListener(("mouseout"), ()=> {
   face.innerHTML = ":)";
});

// ---------------------------------------------
   