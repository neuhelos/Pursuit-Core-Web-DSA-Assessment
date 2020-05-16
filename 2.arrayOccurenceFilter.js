// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution MUST work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]
// 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3) returns [1, 3] 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) returns [1, 3, 4] 

const freqMap = array => {
    let map = {}
    for (let el of array){
        map[el] ? map[el] += 1 : map[el] = 1
    }
    return map
}

const occurrenceFilter = (arr, n) => {
    let map = freqMap(arr)
    return Object.keys(map).filter( el => map[el] >= n)
}

module.exports = occurrenceFilter