const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function () {
    if (cookie.style.width === '200px') {
        cookie.style.width = '400px';
    } else {
        cookie.style.width = '200px';
    }
    clicker.textContent = Number(clicker.textContent) + 1;   
};