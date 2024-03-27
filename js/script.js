

const result = document.querySelector("body");

for(i = 1; i <= 100; i++) {
    let text = i;
    let type =`number`
    const square = `square`
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

    result.innerHTML += `<div class="${type} ${square}">${text}</div>`
}
