const address = document.querySelector("#IPaddress");
fetch("https://api.ipify.org/?format=json").then(response => response.json())
.then(data => address.innerText = data.ip);