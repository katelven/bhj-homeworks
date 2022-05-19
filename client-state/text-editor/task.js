const editor = document.getElementById("editor");
const body = document.getElementsByTagName("body");
const button = document.createElement("button");

editor.addEventListener("input", () => {
   if (editor.value != "") {
      localStorage.value = editor.value;
   }
})
editor.addEventListener("click", () => {
   if (Array.from(document.getElementsByClassName("task__remove"))[0]) {
      return;
   }
   else {
      button.className = "task__remove";
      button.textContent = "Очистить содержимое";
      body[0].appendChild(button);
   }
})

button.addEventListener("click", () => {
   editor.value = "";
   localStorage.clear();
})

if (localStorage.length > 0) {
   editor.value = localStorage.value;
}