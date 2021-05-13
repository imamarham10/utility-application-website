const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const reverse = document.querySelector('#reverse');
const charcount = document.querySelector('#charcount');
const wordcount = document.querySelector('#wordcount');
const input = document.querySelector('#input');
function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }
  function wordCounter(text) {
    var text = input.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
            wordCount++;
          }
      }
    
    alert("Word Count: " + wordCount);
    //count.innerText = wordCount;
  }

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
    window.alert("Character Count: " + parseInt(input.value.length, 10));
});
wordcount.addEventListener('click',()=>{
  //  let len = parseInt(input.value.split(' ').length, 10);
    // window.alert("Word Count: " + parseInt(input.value.split(' ').length,10));
    wordCounter(input.value);
    
});