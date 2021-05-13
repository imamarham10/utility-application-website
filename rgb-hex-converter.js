const btnRed = document.querySelector('#input-red');
const btnGreen = document.querySelector('#input-green');
const btnBlue = document.querySelector('#input-blue');
const btnGenerate = document.querySelector('#generator-btn-encode');
const hexOutput = document.querySelector('#hex-output-text');
const box = document.querySelector('#box');
btnGenerate.addEventListener("click",()=> {
  let r = document.querySelector('#input-red').value;
  let g = document.querySelector('#input-green').value;
  let b = document.querySelector('#input-blue').value;
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16); 
  if (r.length < 2) {
    r = "0" + r;
  }
           
  if (g.length < 2) {
    g = "0" + g;
  }
  if (b.length < 2) {
    b = "0" + b;
  }
  hexOutput.value = ('#'+r+g+b).toUpperCase(); 
  box.style.backgroundColor = hexOutput.value ;
  box.style.borderColor = hexOutput.value;
});