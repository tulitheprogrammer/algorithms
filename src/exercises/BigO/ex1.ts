/************** Question ********************/
// please optimize this algorithm runtime complexity:
// O(n)
const sumArr = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/***************Answer*******************/
// O(n)
const sumArr1 = arr => {
    let sum = 0;
    const len = arr.length;
    const middle = Math.floor(len / 2);
    const leftOver = len % 2;
    for (let i = 0; i < middle; i++) {
        sum += arr[i] + arr[len - 1 - i];
    }

    return sum + (leftOver ? arr[middle] : 0);
}

/***************Answer*******************/
// O(1)
const sumArr2 = arr => {
    const len = arr.length;
    const sum = (1 + len) * len / 2;
    return sum;
}


/************* TEST ********************* */
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function print(func) {
    console.log(func(nums1));
    console.log(func(nums2));
}

function main() {
    print(sumArr);
    print(sumArr1);
    print(sumArr2);
}

main();