// REST (...)

function som(...numbers) {
    return numbers.reduce((prev, current) => {
        return prev + current
    });
};

console.log(som(1, 2, 3, 4, 5));

// SPREAD

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
};

const numbers = [1, 2, 3];

console.log(sum(...numbers));

