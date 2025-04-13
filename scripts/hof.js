const array1 = [1, 4, 9, 16];

// Pass a function to map

function doubleValues(val){
    return val*2;
}

const map1 = array1.map(doubleValues);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]