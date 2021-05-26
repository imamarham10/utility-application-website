const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const millisecond = document.querySelector("#millisecond");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const pause = document.querySelector("#pause");
let stopwatch;
let h = 0;
let s = 0;
let m = 0;
let ms = 0;

start.addEventListener('click',()=>{
    stopwatch = setInterval(()=>{
        ms+=10;
        if(ms === 1000)
        {
            ms = 0;
            s += 1;
        }
        if(s == 60)
        {
            s = 0;
            m+=1;
        }
        if(m == 60)
        {
            m = 0;
            h += 1;
        }
        hour.innerText = h;
        minute.innerText = m;
        second.innerText = s;
        millisecond.innerText = ms;

    },10);

});

reset.addEventListener('click',()=>{
    clearInterval(stopwatch);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';
    millisecond.innerText = '000';
});

pause.addEventListener('click',()=>{
    clearInterval(stopwatch);
})