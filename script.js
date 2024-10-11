container = document.createElement("div");
p = document.createElement("p");
// let row_1 = document.createElement("div");
// button.classList.add("row");
// document.body.appendChild(container);
// let row_2 = document.createElement("div");
// button.classList.add("row");
// document.body.appendChild(container);
// let row_3 = document.createElement("div");
// button.classList.add("row");
// document.body.appendChild(container);
let first_number = "";
let second_number = "";
is_clicked = false;
operation = "";

for (let i = 1; i <= 9; i++) {
  let button = document.createElement("button");
  button.textContent = i;
  button.classList.add("box");
  container.appendChild(button);

  button.addEventListener("click", (e) => {
    if (is_clicked == true) {
      second_number += e.target.textContent;
    } else {
      first_number += e.target.textContent;
    }
  });
}

let button = document.createElement("button");
button.textContent = "+";
button.classList.add("box");
container.appendChild(button);
button.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button = document.createElement("button");
button.textContent = "-";
button.classList.add("box");
container.appendChild(button);
button.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button = document.createElement("button");
button.textContent = "/";
button.classList.add("box");
container.appendChild(button);
button.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button = document.createElement("button");
button.textContent = "*";
button.classList.add("box");
container.appendChild(button);
button.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button = document.createElement("button");
button.textContent = "=";
button.classList.add("box");
container.appendChild(button);
button.addEventListener("click", (e) => {
  first_number = +first_number;
  second_number = +second_number;
  if (operation == "+") {
  }
  if (operation == "/") {
  }
  if (operation == "-") {
  }
  if (operation == "*") {
  }
});

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a,b) {
    p.textContent = a * b
  };
  

document.appendChild(p);
document.appendChild(container);
container.classList().add("container");

function operate(...arg) {
  arg.splice();
}
