let number = 1;

while (number <= 50) {
    console.log(number);
    number++;
}
let number1 = 1;
let sum = 0;

while (number1 <= 50) {
    sum += number1;
    number1++;
}

console.log("The sum of numbers from 1 to 50 is:", sum);

let number3 = 2;

while (number3 <= 50) {
    if (number3 % 2 === 0) {
        console.log(number3);
    }
    number3++; 
}

let numbers = 2;
while (numbers <= 100) {
    let Prime = 1;
    let divisor = 2;

    while (divisor < numbers) {
        if (numbers % divisor === 0) {
            Prime = 0;
            break;
        }
        divisor++;
    }

    if (Prime) {
        console.log(numbers);
    }

    numbers++;
}