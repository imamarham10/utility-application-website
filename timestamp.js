const year = document.querySelector('#year');
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');
const min = document.querySelector('#minute');
const sec = document.querySelector('#second');
const convert1 = document.querySelector('#convert1');
const output1 = document.querySelector('#output1');

function humanToEpoch(){
    const y = parseFloat(year.value);
    const m = parseFloat(month.value) - 1;
    const d = parseFloat(date.value);
    const h = parseFloat(hour.value);
    const minute = parseFloat(min.value);
    const s = parseFloat(sec.value);
    const epoch = new Date(y, m, d, h, minute, s);
    output1.value = epoch.getTime() / 1000.0;
}
convert1.addEventListener('click',()=>{
    humanToEpoch();
});

const epochInput = document.querySelector('#timestamp');
const btnConvert = document.querySelector('#convert2');
const dateResult = document.querySelector('#output2');
function epochToHuman(){
    const ep = parseInt(epochInput.value,10);
    const d = new Date(ep * 1000);
    dateResult.value = d.toLocaleString();
}
btnConvert.addEventListener('click',()=>{
    epochToHuman();
});