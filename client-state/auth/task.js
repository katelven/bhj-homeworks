const visualization = document.getElementById('signin');
const btn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome')

visualization.classList.add('signin_active');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    let form = document.getElementById('signin__form');
    let formData = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.send(formData);
    request.onreadystatechange = function() {
        if (request.readyState === request.DONE) {
            let response = JSON.parse(request.responseText);
            if (response.success) {
                localStorage.setItem('userId', response.user_id);
                visualization.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.textContent = response.user_id;
            } else {
                window.alert('Вы ввели неправильный логин и/или пароль')
            }
        }
    }
});