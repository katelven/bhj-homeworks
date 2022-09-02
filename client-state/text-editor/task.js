const editor = document.getElementById('editor');
const clearKey = document.getElementById('clearKey');

editor.addEventListener('input', saveText);
window.addEventListener('load', printTextFromLocalStorage);
clearKey.addEventListener('click', () => editor.value = '');


function saveText(event) {
    localStorage.text = editor.value;
}

function printTextFromLocalStorage(event) {
    editor.value = localStorage.getItem('text')
}

function clear(event) {

    event.preventDefault();
    editor.value = '';

    if (event.target === clearKey) {
        localStorage.removeItem('text');
    } else {
        localStorage.clear();
    }
}