const input = 10;
const yourFunction = (number) => {
    const copy = String(number).split("").join("-");
    return copy;
};
console.log(yourFunction(input)); // '1-0'
const secondInput = 1;
console.log(yourFunction(secondInput)); // '1'
const thirdInput = 11234;
console.log(yourFunction(thirdInput)); // '1-1-2-3-4'