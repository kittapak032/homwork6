const counter = document.querySelector('.counter');

const inc = document.querySelector('.btn-inc');
const dec = document.querySelector('.btn-dec');
const clr = document.querySelector('.btn-clr');

const numbCount = document.querySelector('.number');

let sum = 0;
function getNumber() {
    let number = parseInt(numbCount.textContent);
    return number;
}

function increase() {
    let number = getNumber();
    number += 1;
    numbCount.innerText = number;
    console.log(number);
}
function decrease() {
    let number = getNumber();
    if (number > 0) {
        number -= 1;
        numbCount.innerText = number;
        console.log(number);
    }else {
        alert('ไม่สามารถลดได้อีกแล้ว');
    }
}
function clear() {
    let number = getNumber();
    number = 0;
    numbCount.innerText = number;
    console.log(number);
    // alert('ล้างข้อมูล');
}

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
clr.addEventListener('click',clear);

