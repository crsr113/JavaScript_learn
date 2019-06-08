
let area1 = document.querySelector('#area1');
let colorInput1 = document.querySelector('#colorInp1');
let area2 = document.querySelector('#area2');
let form1=document.form1.figure;
let form_lengths=document.form_lengths.length;
var isRadiusExists = false;
var figureType = 'Rectangle'
console.log(form_lengths);

let clickHandler = function(event,) {
  let newFigure = document.createElement('div');
  let figureColor = colorInput1.value;
  newFigure.classList.add('figure1');
  newFigure.style.top = event.offsetY + 'px';
  newFigure.style.left = event.offsetX + 'px';
  newFigure.style.backgroundColor = figureColor;
  console.log(figureType);
  
  switch (figureType) {
    case 'Rectangle':
        newFigure.style.width=document.getElementById("width").value + 'px';
        newFigure.style.height=document.getElementById("height").value + 'px';
        
      break;
    case 'Square':
        newFigure.style.width=document.getElementById("width").value + 'px';
        newFigure.style.height=document.getElementById("width").value + 'px';
      break;
    case 'Circle':
        newFigure.style.width=document.getElementById("width").value + 'px';
        newFigure.style.height=document.getElementById("width").value + 'px';
        newFigure.style.borderRadius='50%';
      break;
    case 'Oval':
        newFigure.style.width=document.getElementById("width").value + 'px';
        newFigure.style.height=document.getElementById("height").value + 'px';
        newFigure.style.borderRadius='50%';
      break;
              
  
  }
  // if (document.getElementById("width").value !== null) {
  //   newFigure.style.width=document.getElementById("width").value + 'px';
  // }
  // if (document.getElementById("height").value !== null) {
  //   newFigure.style.height=document.getElementById("height").value + 'px';
  // }
  // else {
  //   newFigure.style.height=document.getElementById("width").value + 'px';
  // }
  // if (isRadiusExists) {
  //   newFigure.style.radius='50%';
  // }
  document.querySelector("#"+this.id).appendChild(newFigure);
  console.log(newFigure);
  
}

area1.addEventListener('click', clickHandler);
area2.addEventListener('click', clickHandler);

for(let i=0; i<form1.length; i++ ){
  form1[i].addEventListener('change', function(event) {

    // console.log(this.value) ;
    switch (this.value) {
      case 'Rectangle':
          document.getElementById("width").style.display="inline";
          document.getElementById("height").style.display="inline";
          isRadiusExists=false;
          figureType=this.value;
        break;
      case 'Square':
          document.getElementById("width").style.display="inline";
          document.getElementById("height").style.display="none";
          // document.getElementById("height").value=null;
          isRadiusExists=false;
          figureType=this.value;
        break;
      case 'Circle':
          document.getElementById("width").style.display="inline";
          document.getElementById("height").style.display="none";
          // document.getElementById("height").value=null;
          isRadiusExists=true;
          figureType=this.value;
        break;
      case 'Oval':
          document.getElementById("width").style.display="inline";
          document.getElementById("height").style.display="inline";
          isRadiusExists=true;
          figureType=this.value;
        break;
                
    }
    }, false);

}
