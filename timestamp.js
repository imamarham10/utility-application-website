const year = document.querySelector('#year');
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');
const min = document.querySelector('#minute');
const sec = document.querySelector('#second');
const timestamp = document.querySelector('#timestamp');
const convert1 = document.querySelector('#convert1');
const convert2 = document.querySelector('#convert2');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');

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
function epochToHuman(){
    const time = parseInt(timestamp.value,10) || 0;
    const dateNew = new Date(time);
    output2.value = dateNew.toLocaleString();

}
convert1.addEventListener('click',()=>{
    humanToEpoch();
});
convert2.addEventListener('click',()=>{
    epochToHuman();
});