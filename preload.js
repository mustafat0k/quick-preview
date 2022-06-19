window.myAPI = {
  desktop: true
}
window.addEventListener('DOMContentLoaded', () => {
   /** 
    *   const el = document.querySelector('#img');

    el.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseUp()
    {
        window.removeEventListener('mousemove', move, true);
    }

    function mouseDown(e){
      window.addEventListener('mousemove', move, true);
    }

    function move(e){
        var div = el;
  console.log('fired')

      div.style.position = 'absolute';
      div.style.top = e.clientY + 'px';
      div.style.left = e.clientX + 'px';
    }

    */


  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})


