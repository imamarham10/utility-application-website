function rgbToHex(red,green,blue)
{
  const hex1 = Number(red).toString(16);
  const hex2 = Number(green).toString(16);
  const hex3 = Number(blue).toString(16);
  if(hex1.length == 1)
  {
    hex1 = "0" + hex1;
  }
  if(hex2.length == 1)
  {
    hex2 = "0" + hex2;
  }
  if(hex3.length == 1)
  {
    hex3 = "0" + hex3;
  }
  return  hex1 + hex2 + hex3;
}
const btnRed = document.querySelector('#input-red');
const btnGreen = document.querySelector('#input-green');
const btnBlue = document.querySelector('#input-blue');
const btnGenerate = document.querySelector('#generator-btn-encode');
const hexOutput = document.querySelector('#hex-output-text');

btnGenerate.addEventListener("click",()=> {
  hexOutput.innerText = rgbToHex(btnRed,btnGreen,btnBlue);
})
