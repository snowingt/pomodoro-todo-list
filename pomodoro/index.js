let currentPomodoro;

let minutos = document.querySelector("#time--minutos");
let minutovalue = 25;

let seconsd = document.querySelector("#seconsd");
let seconsValue = 60;

let btn = document.querySelector(".btn");

let objetivos = document.querySelector("#objetivo");
let parrafo = "";

btn.addEventListener('click',startPomodoro)

function startPomodoro() {
  currentPomodoro = setInterval(() => {
    seconsValue -= 1;

    seconsd.textContent = seconsValue;
    if (seconsValue === 00) {
      seconsValue = 60;
      minutovalue -= 1;
      if (minutovalue == 0) {
        stopPomodoro();
        alert("tu pomodoro termino :)");
        reStatPomodoro();
      }
    }
    minutos.textContent = minutovalue;
  }, 1000);
}

function stopPomodoro() {
  clearInterval(currentPomodoro);
}

function reStatPomodoro() {
  minutovalue = 25;
  minutos.textContent = minutovalue;
  seconsValue = 60;

  seconsd.textContent = seconsValue;
}

//aqui va el todo

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn--add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtne());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtne() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.className = "btn--delete";

  deleteBtn.addEventListener("click", (e) => {
    const intem = e.target.parentElement;
    ul.removeChild(intem);
    const intems = document.querySelectorAll("li");
    if (intems.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
