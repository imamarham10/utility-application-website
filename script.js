const btnEn = document.querySelector("#btn-encode");
const btnDe = document.querySelector("#btn-decode");
const text1 = document.querySelector("#url-text");
const text2 = document.querySelector("#url-result");
function urlEncoder(url)
{
  const encode= encodeURIComponent(url).replace('.','$');
  return encode;
}
function urlDecoder(encoded_url)
{
  const decode= decodeURIComponent(encoded_url).replace('$','.');
  return decode;
}
btnEn.addEventListener("click",()=>{
   const val = urlEncoder(text1.value);
   text2.value = val;
   console.log(text2.value);
})
btnDe.addEventListener("click",()=>{
    const url = urlDecoder(text1.value);
    text2.value = url;
    console.log(text2.value);
})
