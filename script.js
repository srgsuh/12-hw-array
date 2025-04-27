const printArray = arr => {
    // TODO HW1
}

const reverseArray = arr => {
    // TODO HW2
}

const search = (arr, value) => {
    // TODO HW3 , return index of value and -1 otherwise
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes); // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes);
printArray(primes); // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 13);
console.log(index); // 2
index = search(primes, 10);
console.log(index); // -1

