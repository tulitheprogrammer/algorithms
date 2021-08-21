/************** Question ********************/
// please optimize this algorithm runtime complexity:
// O(n)
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const sumArr = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let result1 = sumArr(nums1);
console.log(result1);
result1 = sumArr(nums2);
console.log(result1);

/***************Answer*******************/
// O(n)

const sumArr2 = arr => {
    let sum = 0;
    const len = arr.length;
    const middle = Math.floor(len / 2);
    const leftOver = len % 2;
    for (let i = 0; i < middle; i++) {
        sum += arr[i] + arr[len - 1 - i];
    }

    return sum + (leftOver ? arr[middle] : 0);
}

let result2 = sumArr2(nums1);
console.log(result2);
result2 = sumArr2(nums2);
console.log(result2);

/***************Answer*******************/
// O(1)
const sumArr3 = arr => {
    const len = arr.length;
    const sum = (1 + len) * len / 2;
    return sum;
}

let result3 = sumArr3(nums1);
console.log(result3);
result3 = sumArr3(nums2);
console.log(result3);
