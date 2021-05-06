const btnEn = document.querySelector("#btn-encode");
const btnDe = document.querySelector("#btn-decode");
const text1 = document.querySelector("#url-text");
const text2 = document.querySelector("#url-result");
function base64Encoder(str)
{
  const base64 = btoa(str);
  return base64;
}
function base64Decoder(encoded_str)
{
  const original = atob(encoded_str);
  return original;
}
btnEn.addEventListener("click",()=>{
   const val = base64Encoder(text1.value);
   text2.value = val;
   console.log(text2.value);
})
btnDe.addEventListener("click",()=>{
    const url = base64Decoder(text1.value);
    text2.value = url;
    console.log(text2.value);
})
