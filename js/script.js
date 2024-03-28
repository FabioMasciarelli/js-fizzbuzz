const header = document.querySelector(".header");
const title = `Fizz Buzz DOM`;
header.innerHTML = `<h1>${title}</h1>`;


const containerElem = document.querySelector(".container");
let result = "";

for(i = 1; i <= 100; i++) {
    let text = i;
    let type =`number`;
    
    if (i % 5 === 0 && i % 3 === 0) {
        text =`FizzBuzz`;
        type = `fizzbuzz`;
        console.log(text);
    } else if (i % 5 === 0) {
        console.log(i);
        text = `Buzz`;
        type = `buzz`;
        console.log(text);
    } else if (i % 3 === 0) {
        console.log(i);
        text = `Fizz`;
        type = `fizz`;
        console.log(text);
    }
    
    result += `<div class="${type} square">${text}</div>`;
}

containerElem.innerHTML += result;
console.log(containerElem);