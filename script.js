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

document.querySelector(".btn__minus--plus").addEventListener("click" , minusPlus)

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

/*const theme = localStorage.getItem("theme");
if (theme) {
    displayWrapper.classList.add(theme);
  if (displayWrapper.classList.contains("light")) {
    logoColorChanger(true);
    displayWrapper.classList.remove("dark");
  }
}

if (
  (document.URL.includes("item.html") ||
    document.URL.includes("profile.html")) &&
    displayWrapper.classList.contains("light")
) 


document.querySelector(".btn__mood").addEventListener("click", mood);

function mood() {
    displayWrapper.classList.replace("dark", "light") || displayWrapper.classList.replace("light", "dark");
  logoColorChanger(true);
  localStorage.setItem("theme", "light");
  if (
    document.URL.includes("item.html") ||
    document.URL.includes("profile.html")
  )
};

document.querySelector(".theme-dark").addEventListener("click", function () {
  bodyEl.classList.replace("light", "dark");
  logoColorChanger(false);
  localStorage.setItem("theme", "dark");
  if (
    document.URL.includes("item.html") ||
    document.URL.includes("profile.html")
  ) {
    heroEl.classList.remove("hero--light");
  }
});*/