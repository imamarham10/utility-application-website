const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const h = document.querySelector('#hour');
const m = document.querySelector('#minute');
const s = document.querySelector('#second');

let interval = null;

function stopInterval() {
    clearInterval(interval);
}

start.addEventListener('click',()=>{
        interval = setInterval(()=> {
            if(s.value != 0) {
                s.value -= 1;
            } else if(m.value != 0 && s.value == 0) {
                s.value = 59;
                m.value -= 1;
            } else if(h.value != 0 && m.value == 0) {
                m.value = 59;
                h.value -= 1;
            }
            
            if(h.value == 0 && m.value == 0 && s.value == 0) {
                alert(`time up`);
                stopInterval();
            }
        }, 1000);
});
reset.addEventListener('click',()=>{
    h.value = " ";
    m.value = " ";
    s.value = " ";
    stopInterval();
});