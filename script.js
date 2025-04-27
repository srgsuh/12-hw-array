const printArray = arr => {
    console.log(arr.join(', '));
}

const reverseArray = arr => {
    let l = -1, r = arr.length;
    while (++l < --r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    return arr;
}

const search = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes); // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes);
printArray(primes); // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 13);
console.log(index); // 2
index = search(primes, 10);
console.log(index); // -1

