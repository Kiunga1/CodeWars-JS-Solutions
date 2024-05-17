DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//solution

function findShort(s){
  
    // Split the string into an array of words
    let words = s.split(" ");
    
    // Map the array of words to an array of their lengths
    let lengths = words.map(word => word.length);
    
    // Find and return the minimum length in the array of lengths
    return Math.min(...lengths);
}