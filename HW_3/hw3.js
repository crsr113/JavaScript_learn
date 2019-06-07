
let area = document.querySelector('#area');
let colorInput = document.querySelector('#colorInp');


let clickHandler = function(event) {
  if (event.target.id !== 'area') return;
  let newFigure = document.createElement('div');
  let figureColor = colorInput.value;
  // newFigure.className = 'figure';
  newFigure.classList.add('figure');
  newFigure.style.top = event.offsetY + 'px';
  newFigure.style.left = event.offsetX + 'px';
  newFigure.style.backgroundColor = figureColor;
  area.appendChild(newFigure);
}

area.addEventListener('click', clickHandler);
