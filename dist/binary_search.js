"use strict";
function findFirstOccurrence(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    let result = -1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (target == numbers[mid]) {
            result = mid;
            high = mid - 1;
        }
        else if (target < numbers[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}
let listNumber = [2, 5, 5, 5, 6, 6, 8, 8, 9, 9];
let target = 8;
let index = findFirstOccurrence(listNumber, target);
if (index != -1) {
    console.log(`Phan tu ${target} xuat hien dau tien o vi tri ${index}`);
}
else {
    console.log(`Phan tu ${target} ko ton tai trong mang`);
}
