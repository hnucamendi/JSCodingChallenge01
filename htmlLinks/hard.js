"use strict";
// HARD: Create 4 math functions, one called add() that adds 2 numbers,
//one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers,
//and one called divide() to divide two numbers.

// const inputTwo = document.querySelector(".NumTwo");

function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let remainder = a - b;
  return remainder;
}

function multiply(a, b) {
  let product = a * b;
  return product;
}

function divide(a, b) {
  let quotient = a / b;
  return quotient;
}

const addOp = document.querySelector(".addOp");
const subtractOp = document.querySelector(".subOp");
const multiplyOp = document.querySelector(".mulOp");
const divideOp = document.querySelector(".divOp");
const allDisplay = document.querySelector(".display");
const display1 = document.querySelector(".display--01");
const display2 = document.querySelector(".display--02");
const display3 = document.querySelector(".display--03");
const display4 = document.querySelector(".display--04");

addOp.addEventListener("click", function () {
  display1.style.display = "flex";
  display2.style.display = "none";
  display3.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--01").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--01").value);
    const input2 = Number(document.querySelector(".NumTwo--01").value);
    // console.log(typeof input1, input1, typeof input2, input2);

    let hOutput = add(input1, input2);
    document.querySelector(".H-output--01").textContent = hOutput;
  });
});

subtractOp.addEventListener("click", function () {
  display2.style.display = "flex";
  display1.style.display = "none";
  display3.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--02").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--02").value);
    const input2 = Number(document.querySelector(".NumTwo--02").value);

    let hOutput = subtract(input1, input2);
    document.querySelector(".H-output--02").textContent = hOutput;
  });
});

multiplyOp.addEventListener("click", function () {
  display3.style.display = "flex";
  display1.style.display = "none";
  display2.style.display = "none";
  display4.style.display = "none";

  document.querySelector(".H-check--03").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--03").value);
    const input2 = Number(document.querySelector(".NumTwo--03").value);

    let hOutput = multiply(input1, input2);
    document.querySelector(".H-output--03").textContent = hOutput;
  });
});

divideOp.addEventListener("click", function () {
  display4.style.display = "flex";
  display1.style.display = "none";
  display2.style.display = "none";
  display3.style.display = "none";

  document.querySelector(".H-check--04").addEventListener("click", function () {
    const input1 = Number(document.querySelector(".NumOne--04").value);
    const input2 = Number(document.querySelector(".NumTwo--04").value);

    let hOutput = divide(input1, input2);
    document.querySelector(".H-output--04").textContent = hOutput;
  });
});
