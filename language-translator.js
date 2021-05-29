const buttonTranslate = document.querySelector('#translate');
const input = document.querySelector('#input-string');
const output = document.querySelector('#output-string');
const selectInput = document.querySelector('.select-input');
const selectOutput = document.querySelector('.select-output');

window.addEventListener('load', () => {
    buttonTranslate.addEventListener('click', () => {
        fetch(
            `https://api.mymemory.translated.net/get?q=${input.value}&langpair=${selectInput.value}|${selectOutput.value}`,
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                output.value = json.responseData.translatedText;
            });
    });
});