const openChat = document.querySelector('.chat-widget');
const chatEnter = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let options = ['Вы не купили ни одного товара, чтобы так с нами разговаривать!', 
'Кто тут?', 
'Где Ваша совесть?', 
'К сожалению, все операторы сейчас заняты. Не пишите нам больше.', 
'Добрый день! До свидания!', 
'Мы ничего не будем Вам продавать!',
'Никуда не уходите, я скоро вернусь.', 
'Не мешайте, я думаю!'];

openChat.addEventListener('click', function() {
    openChat.classList.add('chat-widget_active');
});

chatEnter.addEventListener('change', sendMessage);

function timeNow () {
    return new Date().toLocaleTimeString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    })
};

function chatBot(options) {
    const random = Math.floor(Math.random() * options.length);
    messages.innerHTML += `
    <div class='message'>
    <div class='message__time'>${timeNow()}</div>
    <div class='message__text'>${options[random]}</div>
    </div>`;
};
function sendMessage(e) {
    messages.innerHTML += `
    <div class='message message_client'>
    <div class='message__time'>${timeNow()}</div>
    <div class='message__text'>${e.target.value}</div>
    </div>`;
    e.target.value = '';
    chatBot(options);
};





