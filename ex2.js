function sortNumber(a,b) {
    return a - b;
}

var x = [1, 20, 15, 18, 3, 9, 37];

console.log(`X = ${x}`);
x.sort(sortNumber);
console.log(`X = ${x}`);
