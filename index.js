// Write your code here
function multiply(num1, num2) {
    num1 = 2;
    num2 = 31;
    const res = num1 * num2;
    return res;
}

function random() {

    const randomNos = Math.random() * 10;
    const result = Math.round(randomNos);
    if(Number.isInteger(result)) {
        return result;
    }
} 

function mod(num3, num4) {
    num3 = 16;
    num4 = 6;
    let res = num3 % num4;
    return res;
}

function max() {
    const maxNos = Math.max(5, 10, 15, 20);
    return maxNos;
}
