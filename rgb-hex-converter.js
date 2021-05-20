const btnRed = document.querySelector('#input-red');
const btnGreen = document.querySelector('#input-green');
const btnBlue = document.querySelector('#input-blue');
const btnGenerate = document.querySelector('#generator-btn-encode');
const hexOutput = document.querySelector('#hex-output-text');
const box = document.querySelector('#box');
const box2 = document.querySelector('#box2');
const hexInput = document.querySelector('#hex-input-text');
const rgbOutput = document.querySelector('#rgb-output-text');
const decodeGenerate = document.querySelector('#generator-btn-decode');
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

function hexToRgb(hex)
{
  const hexValue=hex.match(/.{1,2}/g);
  const red=parseInt(hexValue[0],16);
  const green=parseInt(hexValue[1],16);
  const blue=parseInt(hexValue[2],16);
  return [red,green,blue];
}
hexInput.addEventListener('input',()=>{
  box2.style.backgroundColor = ('#'+hexInput.value).toUpperCase();
})
decodeGenerate.addEventListener("click",()=>{
  const ans = hexToRgb(hexInput.value);
  const rgb = `rgb(${ans[0]},${ans[1]},${ans[2]})`;
  rgbOutput.value = rgb;
})