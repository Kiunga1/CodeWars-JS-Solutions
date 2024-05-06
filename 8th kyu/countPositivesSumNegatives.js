// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    // Check if input is null or empty
    if (!input || input.length === 0){
      return []; // Return an empty array
    }
    
    // Initialize variables to store positive counts and sum of negatives
    let positiveCount = 0;
    let negativeSum = 0;
    
    // Iterate over each number in the input array
    for (let num of input) {
      // Check if number is positive, increment the positive count
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        // If num is negative, add it to the sum of negatives
        negativeSum += num;
      }
    }
    
    // Return an array containing the count of positives and the sum of negatives
    return [positiveCount, negativeSum];
  }