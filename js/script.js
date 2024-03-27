const header = document.querySelector(".header");
const title = `Fizz Buzz DOM`;
header.innerHTML = `<h1>${title}</h1>`;

const result = document.querySelector(".container");

for(i = 1; i <= 100; i++) {
    let text = i;
    let type =`number`;
    const square = `square`;
    if(i % 3 === 0) {
        console.log(i);
        text = `Fizz`;
        type = `fizz`;
        console.log(text);
    }

    if (i % 5 === 0){
        console.log(i);
        text = `Buzz`;
        type = `buzz`;
        console.log(text);
    }

    if (i % 5 === 0 && i % 3 === 0) {
        text =`FizzBuzz`;
        type = `fizzbuzz`;
        console.log(text);
    }

    result.innerHTML += `<div class="${type} ${square}">${text}</div>`;
}
