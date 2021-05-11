const bin = document.querySelector('#input-bin');
const dec = document.querySelector('#input-deci');
const oct = document.querySelector('#input-oct');
const hex = document.querySelector('#input-hex');
function binaryToNum() {
    const ans = parseInt(bin.value, 2) || 0;
    dec.value = ans;
    oct.value = ans.toString(8);
    hex.value = ans.toString(16).toUpperCase();
}
function decimalToNum() {
    const d = parseInt(dec.value,10) || 0;
    bin.value = d.toString(2);
    oct.value = d.toString(8);
    hex.value = d.toString(16).toUpperCase();
}
function octalToNum() {
    const o = parseInt(oct.value,8) || 0;
    bin.value = o.toString(2);
    dec.value = o.toString(10);
    hex.value = o.toString(16).toUpperCase();
}
function hexToNum(){
    const h = parseInt(hex.value,16) || 0;
    bin.value = h.toString(2);
    dec.value = h.toString(10);
    oct.value = h.toString(8);
}
bin.addEventListener('input',()=>{
    binaryToNum();
});

dec.addEventListener('input',()=>{
    decimalToNum();
});
oct.addEventListener('input',()=>{
    octalToNum();
});
hex.addEventListener('input',()=>{
    hexToNum();
});