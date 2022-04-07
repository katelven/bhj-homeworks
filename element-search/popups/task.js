let mainWindow = document.getElementById('modal_main');
let showSuccess = document.getElementById('modal_success');
let closeWindow = document.getElementsByClassName('modal__close');
let successWindow = document.getElementsByClassName('show-success');

mainWindow.classList.add('modal_active');

successWindow[0].onclick = () => {
    showSuccess.classList.add('modal_active');
    mainWindow.classList.remove('modal_active');
};

closeWindow[0].onclick = () => {
    mainWindow.classList.remove('modal_active');
};

closeWindow[2].onclick = () => {
    showSuccess.classList.remove('modal_active');
};