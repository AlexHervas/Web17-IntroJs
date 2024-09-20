const input = 10;
const yourFunction = (number) => {
    return String(number).split("").join("-")
};
yourFunction(input); // '1-0'
const secondInput = 1;
yourFunction(secondInput); // '1'
const thirdInput = 11234;
yourFunction(thirdInput); // '1-1-2-3-4'