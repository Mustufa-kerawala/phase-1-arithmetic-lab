// Write your code here
function multiply(num1=2, num2=31) {
    const multiply = num1 * num2;
    return multiply;
}

function random() {

    const randomNos = Math.random() * 10;
    let random = Math.round(randomNos);
    if(Number.isInteger(random) && random > 0) {
        return random;
    }
    else if (random === 0) {
            return ++random;
        }
} 

function mod(num3=16, num4=6) {
    const mod = num3 % num4;
    return mod;
}

function max() {
    const max = Math.max(5, 10, 15, 20);
    return max;
}
