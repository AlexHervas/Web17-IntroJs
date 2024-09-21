const input1 = 'string';

const yourFunction = (string) => {
    return `${string.length} ${string.split("").toReversed().join("")}`
};

console.log(yourFunction(input1)); // '6 gnirts'
const input2 = 'variable';
console.log(yourFunction(input2)); // '8 elbairav'
const input3 = 'pointer';
console.log(yourFunction(input3)); // '7 retniop'