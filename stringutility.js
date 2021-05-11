const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const reverse = document.querySelector('#reverse');
const charcount = document.querySelector('#charcount');
const wordcount = document.querySelector('#wordcount');
const input = document.querySelector('#input');

lowercase.addEventListener('click',()=>{
    input.value = input.value.toLowerCase();
});
uppercase.addEventListener('click',()=>{
    input.value = input.value.toUpperCase();
});
reverse.addEventListener('click',()=>{
    input.value = input.value.split('').reverse().join('');
});
charcount.addEventListener('click',()=>{
    window.alert(parseInt(input.value.length, 10));
});
wordcount.addEventListener('click',()=>{
  //  let len = parseInt(input.value.split(' ').length, 10);
    window.alert(parseInt(input.value.split(' ').length,10));
    
});