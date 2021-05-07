const btnEn = document.querySelector("#btn-encode");
const text1 = document.querySelector("#url-text");
const text2 = document.querySelector("#url-result");
function md5Encoder(str)
{
  const algo = 'md5';
  const md5_hash = crypto.createHash(algo).update(str).digest('hex');
  return md5_hash;
}
btnEn.addEventListener("click",()=>{
   const val = md5Encoder(text1.value);
   text2.value = val;
   console.log(text2.value);
})
