

const result = document.querySelector("body");
let number = 0;

for(i = 1; i <= 100; i++) {

    if(i % 3 === 0) {
        console.log(i);
        const number = `<div>Fizz</div>`;
        console.log(number);
    }

    if (i % 5 === 0){
        console.log(i);
        const number = `<div>Buzz</div>`
        console.log(number);
    }

    if (i % 5 === 0 && i % 5 !== 0) {
        const number =`<div>FizzBuzz</div>`
        console.log(number);
    }
    result.innerHTML += number
}
