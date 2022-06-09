const displayWrapper = document.querySelector("calculator__Wrapper");



let list = document.querySelectorAll(".btn-inpt");
list.forEach(item => {
    item.addEventListener("click", btnInput)
});

let displayInput = document.querySelector(".display__input");
let displayOutput = document.querySelector(".display__output");


function btnInput(event) {
    const x = event.target.innerText;
    if (displayInput.innerHTML == 0) {
        return displayInput.innerHTML = x;
    }
    return displayInput.innerHTML += x;
};

document.querySelector(".btn__calculate").addEventListener("click", calculate);

function calculate() {
    let result = displayInput.innerText;
    displayOutput.innerHTML = eval(result);
};

document.querySelector(".btn__clear--last").addEventListener("click", clear);

function clear() {
    let text = displayInput.innerText;
    if (text.length === 1) {
        displayInput.innerText = 0;
    } else { 
        displayInput.innerText = text.substring(0, text.length - 1)
    }
};

document.querySelector(".btn__percent").addEventListener("click", percent);

function percent(){
    let y = displayInput.innerText;
    displayOutput.innerHTML = y/100;
};

document.querySelector(".btn__minus--plus").addEventListener("click" , minusPlus);

function minusPlus(){
    if (displayInput.innerHTML.slice(0,1)==="-") {
        displayInput.innerHTML=displayInput.innerHTML.slice(1);
        minusPlus=true;
    } else {
        displayInput.innerHTML="-"+displayInput.innerHTML;
        minusPlus=false;
    }
};

document.querySelector(".btn__clearall").addEventListener("click", clearAll);

function clearAll() {
    displayInput.innerText = 0;
    displayOutput.innerText = 0;
};

const displayEl = document.querySelector(".display");
const keyboardEl = document.querySelector(".keypad__wrapper");
const btnWrp = document.querySelector(".btn-wrp");
const btnEr =document.querySelector(".btn-er");
const btnSev = document.querySelector(".btn__sev");
const btnEight =document.querySelector(".btn__eight");
const btnNine =document.querySelector(".btn__nine");
const btnFour =document.querySelector(".btn__four");
const btnFive =document.querySelector(".btn__five");
const btnSix =document.querySelector(".btn__six");
const btnOne =document.querySelector(".btn__one");
const btnTwo =document.querySelector(".btn__two");
const btnThree =document.querySelector(".btn__three");
const btnZero=document.querySelector(".btn__zero");
const btnDot =document.querySelector(".btn__dot");
document.querySelector(".btn__mood").addEventListener("click", switchBtn);


function switchBtn() {
  displayEl.classList.toggle('desplay--Night');
  keyboardEl.classList.toggle('keyboard--Night');
  btnWrp.classList.toggle('btn--Night');
  btnEr.classList.toggle('btn--Night');
  btnSev.classList.toggle('btn--Night');
  btnEight.classList.toggle('btn--Night');
  btnNine.classList.toggle('btn--Night');
  btnFour.classList.toggle('btn--Night');
  btnFive.classList.toggle('btn--Night');
  btnSix.classList.toggle('btn--Night');
  btnOne.classList.toggle('btn--Night');
  btnTwo.classList.toggle('btn--Night');
  btnThree.classList.toggle('btn--Night');
  btnZero.classList.toggle('btn--Night');
  btnDot.classList.toggle('btn--Night');

}