const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

// Utilizo la misma función para todos los casos.
const restructuredInput = (input) => { 
    return input.slice(0, -1).join("/") + "." + input[input.length -1];
};

console.log(restructuredInput(input1)); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
];

console.log(restructuredInput(input2)); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];

console.log(restructuredInput(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'