


function Missing_Number(array) {
    let n = array.length;
    let sum = (n * (n + 1)) / 2;
    let ElementSum = array.reduce((a, b) => a + b, 0);
    return sum - ElementSum;
}


let array = [0, 1, 3];
console.log(Missing_Number(array));