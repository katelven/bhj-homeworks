const xhr = new XMLHttpRequest();
const ask = document.querySelector(".poll__title");
const answer = document.querySelector(".poll__answers");


xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

function result(arr) {
   const summ = arr.reduce((sum, current) => sum + current.votes, 0);
   let text = '';
   for (let element of arr) {
      text += `${element.answer}: ${(element.votes / summ * 100).toFixed(2)}%</br>`
   }
   answer.innerHTML = text;
}

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      let response = xhr.response.data;
      response.answers.forEach(element => {
         answer.insertAdjacentHTML("beforeend", `<button class="poll__answer"> ${element}</button>`);
      })
      ask.insertAdjacentText("beforeend", `${response.title}`);
      const buttons = Array.from(document.querySelectorAll(".poll__answer"));
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", () => {
            alert('Спасибо, ваш голос засчитан!');
         })
      }
   }
})