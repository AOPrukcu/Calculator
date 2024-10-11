container = document.createElement("div");
container.classList.add("container");
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
  button.addEventListener("click", (e) => {
    if (is_clicked == true) {
      second_number += e.target.textContent;
    } else {
      first_number += e.target.textContent;
    }
    p.textContent = first_number

  });
  container.appendChild(button);
}

let button_sum = document.createElement("button");
button_sum.textContent = "+";
button_sum.classList.add("box");
container.appendChild(button_sum);
button_sum.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button_sub = document.createElement("button");
button_sub.textContent = "-";
button_sub.classList.add("box");
container.appendChild(button_sub);
button_sub.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button_divide = document.createElement("button");
button_divide.textContent = "/";
button_divide.classList.add("box");
container.appendChild(button_divide);
button_divide.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let button_multy = document.createElement("button");
button_multy.textContent = "*";
button_multy.classList.add("box");
container.appendChild(button_multy);
button_multy.addEventListener("click", (e) => {
  is_clicked = !is_clicked;
  operation = e.target.textContent;
});

let btn_clear = document.createElement("button");
btn_clear.textContent = "clear";
btn_clear.classList.add("box");
container.appendChild(btn_clear);


let btn_operate = document.createElement("button");
btn_operate.textContent = "=";
btn_operate.classList.add("box");
container.appendChild(btn_operate);
btn_operate.addEventListener("click", (e) => {
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
  is_clicked = !is_clicked
  first_number = +p.textContent
});

const add = function (a, b) {
    p.textContent = a + b;
};

const subtract = function (a, b) {
    p.textContent = a - b;
};
const multiply = function (a,b) {
    p.textContent = a * b
  };
  
const sub = function (a,b) {
    p.textContent = a / b
  };
  

document.body.appendChild(p);
document.body.appendChild(container);


function operate(...arg) {
  arg.splice();
}
