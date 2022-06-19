window.onload = addListeners();

function addListeners(){
  

const el = document.querySelector('#img');
el.addEventListener('wheel', zoom);
let scale = 1;
el.onwheel = zoom;

function zoom(event) {
  console.log('sa')
  event.preventDefault();
  console.log(scale )

  scale += event.deltaY * -0.001;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}


}
 
