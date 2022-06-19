const el = document.querySelector('#img');
  el.addEventListener('wheel', zoom);
  let scale = 1;
  el.onwheel = zoom;

  function zoom(event) {
    event.preventDefault();
    console.log(scale )

    scale += event.deltaY * -0.001;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

window.onload = addListeners();

function addListeners(){
    el.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', move, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', move, true);
}

function move(e){
    var div = el;
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}
