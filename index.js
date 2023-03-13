// Write your code here
function multiply(num1=2, num2=31) {
    const multiply = num1 * num2;
    return multiply;
}

function random() {

    const randomNos = Math.random() * 10;
    const random = Math.round(randomNos);
    if(Number.isInteger(random)) {
        return random;
    }
} 

function mod(num3, num4) {
    num3 = 16;
    num4 = 6;
    let mod = num3 % num4;
    return mod;
}

function max() {
    const max = Math.max(5, 10, 15, 20);
    return max;
}
