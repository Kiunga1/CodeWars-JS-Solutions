// <!-- Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this challenge, that the supplied array will not be empty. -->

function findSmalestInteger(array) {
    return Math.min (...array);
}
console.log(findSmalestInteger([34,15,88,2]))
//output: 2