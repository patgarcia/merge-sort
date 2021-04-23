function merge(arr1, arr2, r = []) {
    // Merge the items of the input arrays in ascending order
    if (arr1[arr1.length - 1] <= arr2[0]) return arr1.concat(arr2);
    let [elem1, elem2] = [arr1.shift(), arr2.shift()];
    while (elem1) {
        while (elem2 && elem2 <= elem1) {
            r.push(elem2);
            elem2 = arr2.shift();
        }
        r.push(elem1);
        elem1 = arr1.shift();
    }
    return r.concat(elem2 ? [elem2] : []).concat(arr2)
}

function mergeSort(arr) {
    // Recursively split input array into arrays of length 1 or 0
    if (arr.length == 1 || !arr) return arr;
    let half = Math.floor(arr.length / 2);
    let [arr1, arr2] = [arr.slice(0, half), arr.slice(half)];
    return merge(mergeSort(arr1), mergeSort(arr2))
}

let unsortedArray = [
  21, 18,  8,  3,  2,  2, 24, 22, 38, 20,
  38, 19,  3, 31, 34, 12, 27,  7, 22, 11,
  29, 19, 16,  2,  4, 23, 12, 19, 24, 22,
  25, 30, 30, 29, 33, 31,  3,  2, 33, 33
];

mergeSort(unsortedArray); 
/* 
[
   2,  2,  2,  2,  3,  3,  3,  4,  7,  8,
  11, 12, 12, 16, 18, 19, 19, 19, 20, 21,
  22, 22, 22, 23, 24, 24, 25, 27, 29, 29,
  30, 30, 31, 31, 33, 33, 33, 34, 38, 38
] 
*/
